import User from "../models/user.mjs";
import Fund from "../models/fund.mjs";

export const getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate([
      { path: "funds.fundId" },
      { path: "transactions.fundId" },
    ]);

    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const subscribeToFund = async (req, res) => {
  const { userId } = req.params;
  const { fundId, amount } = req.body;

  try {
    const user = await User.findById(userId);
    const fund = await Fund.findById(fundId);

    if (!user || !fund) {
      return res.status(404).json({ message: "Usuario o fondo no encontrado" });
    }

    if (user.balance < amount) {
      return res.status(400).json({ message: "Saldo insuficiente" });
    }

    user.balance -= amount;
    user.funds.push({ fundId, amount });

    user.transactions.push({
      transactionId: `TRX-${Date.now()}`,
      fundId,
      type: "Subscription",
      amount,
    });

    await user.save();

    res.status(200).json({ message: "Subscripción exitosa al fondo", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const cancelFund = async (req, res) => {
  const { userId } = req.params;
  const { fundId } = req.body;

  try {
    const user = await User.findById(userId);
    const fund = await Fund.findById(fundId);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if (!fund) {
      return res.status(404).json({ message: "Fondo no encontrado" });
    }

    const fundIndex = user.funds.findIndex(
      (fund) => fund.fundId.toString() === fundId
    );

    if (fundIndex === -1) {
      return res
        .status(404)
        .json({ message: "Usuario no suscrito a este fondo" });
    }

    console.log(user.funds[fundIndex].amount);

    const amount = user.funds[fundIndex].amount;

    if (typeof amount !== "number" || isNaN(amount)) {
      return res.status(400).json({ message: "Monto del fondo no válido" });
    }

    user.balance += amount;
    user.funds.splice(fundIndex, 1);

    user.transactions.push({
      transactionId: `TRX-${Date.now()}`,
      fundId,
      type: "Cancellation",
      amount,
    });

    await user.save();

    res.status(200).json({ message: "Fondo cancelado exitosamente", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserTransactions = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate("transactions.fundId");

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json({ transactions: user.transactions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const changeNotificationPreferences = async (req, res) => {
  const { userId, email, sms, preferredMethod } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if (!email && !sms) {
      return res.status(400).json({
        message: "Proporcione al menos una notificación (email o SMS)",
      });
    }

    user.notificationPreferences = {
      email,
      sms,
      preferredMethod,
    };

    await user.save();

    res.status(200).json({
      message: "Preferencias de notificación actualizadas",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
