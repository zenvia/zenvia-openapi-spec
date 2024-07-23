Two-Factor Authentication (2FA) adds an extra layer of security by requiring two forms of verification: something you know (like a password) and something you have (like a phone or email account).

**Token Configuration**

Before sending tokens, you need to configure the token settings. This includes:

* Token size
* Language (e.g., English, Spanish)
* Number of verifications required
* Token type (numeric, alphanumeric)
* And more

Note that you only need to create a new configuration if you want to have different rules for sending tokens. Once created, these configurations are identified by an ID and can be used for multiple token sends.

**Token Verification**

Our 2FA service ensures that access requests are made by trusted users by identifying the user's request token. The channels used for sending tokens are:

* **SMS**
* **E-mail**

**Remote IP Address Verification**

When verifying tokens, it is essential to ensure that both the original IP address from which the token was sent and the remote IP address from which the verification request originates are the same. This means that the request to create or send the token must match the request used for verification, ensuring that only authorized users can access your
system.
**How it Works**

Here's how our 2FA service works:

1. The user requests a token, and we generate a unique token for them.
2. When verifying the token, we check that the IP address from which the request was made matches the original IP address of the token creation request.
3. If the IP addresses match, we allow access to your system.

By ensuring that the IP address of the token creation request is the same as the IP address of the token verification request, we can prevent unauthorized access attempts and maintain the integrity of our 2FA system.