Two-Factor Authentication (2FA) is a security measure that adds an extra layer to account access by requiring two distinct forms of verification. The aim is to prevent unauthorized access even if one form of identification is compromised.

### Token Configuration

Before sending tokens, you need to configure the token settings. This includes:

- Token size
- Number of verifications
- Token type (numeric, alphanumeric)
- And more

Note that you only need to create a new configuration if you want to have different rules for sending tokens. Once created, these configurations are identified by an ID and can be used for multiple token sends.

### Token Verification

Our 2FA service ensures that access requests are made by trusted users by identifying the user's request token. The channels used for sending tokens are:

- **SMS**
- **Email**

### How it Works

Here's how our 2FA service works:

1. The user requests a token and we generate a unique token for them.
2. Upon verification of said token we ensure that the generated one and the incoming one match, and only then we allow access to your system.
