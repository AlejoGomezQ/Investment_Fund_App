export interface NotificationPreferences {
  notificationPreference: NotificationMethod;
}

enum NotificationMethod {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
}
