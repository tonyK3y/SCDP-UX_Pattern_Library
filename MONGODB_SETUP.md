# MongoDB Atlas Setup for Payload CMS

## Quick Setup (5 minutes)

### 1. Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up (free tier is perfect for this project)
3. Verify your email

### 2. Create a Cluster
1. Click "Build a Database"
2. Choose **FREE** tier (M0 Sandbox)
3. Select a cloud provider and region (closest to you)
4. Cluster Name: `scdp-pattern-library` (or keep default)
5. Click "Create Deployment"

### 3. Create Database User
1. You'll see "Security Quickstart"
2. Choose **Username and Password** authentication
3. Username: `scdp-admin` (or your choice)
4. **Password:** Click "Autogenerate Secure Password" and **SAVE IT**
5. Click "Create Database User"

### 4. Add Your IP Address
1. On "Where would you like to connect from?"
2. Click "Add My Current IP Address"
3. Or click "Allow Access from Anywhere" (0.0.0.0/0) for development
4. Click "Finish and Close"

### 5. Get Connection String
1. Click "Connect" on your cluster
2. Choose "Drivers"
3. Select **Node.js** and version **6.8 or later**
4. Copy the connection string (looks like):
   ```
   mongodb+srv://scdp-admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual password
6. Add database name at the end: `/scdp-pattern-library` before the `?`

### Final Connection String Format:
```
mongodb+srv://scdp-admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/scdp-pattern-library?retryWrites=true&w=majority
```

### 6. Update .env.local
Replace the DATABASE_URI in `.env.local` with your connection string:

```env
DATABASE_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/scdp-pattern-library?retryWrites=true&w=majority
```

### 7. Test the Connection
Run the dev server:
```bash
npm run dev
```

Visit: http://localhost:3000/admin

You should see the Payload CMS login/setup screen!

## Troubleshooting

**Connection Timeout:**
- Check IP whitelist in Atlas (Network Access)
- Ensure password doesn't have special characters that need URL encoding

**Authentication Failed:**
- Double-check username and password
- Make sure you replaced `<password>` with actual password

**Database Not Found:**
- Ensure `/scdp-pattern-library` is in the connection string
- MongoDB will create it automatically on first connection

## Next Steps

After MongoDB is connected:
1. Visit http://localhost:3000/admin
2. Create your first admin user
3. Start adding pattern content!
