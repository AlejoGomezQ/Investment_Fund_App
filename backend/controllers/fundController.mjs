import Fund from "../models/fund.mjs";

export const getAllFunds = async (req, res) => {
  try {
    const funds = await Fund.find();
    res.status(200).json(funds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
