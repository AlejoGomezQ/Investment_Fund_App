export interface NotificationPreferences {
  email?: String;
  sms?: String;
  preferredMethod: NotificationMethod;
}

enum NotificationMethod {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
}
