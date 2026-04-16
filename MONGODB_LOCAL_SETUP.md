# Local MongoDB Setup for Payload CMS

## Install MongoDB on macOS (5-10 minutes)

### 1. Install MongoDB using Homebrew

```bash
# Install MongoDB Community Edition
brew tap mongodb/brew
brew install mongodb-community@8.0

# Or if you prefer an older stable version
# brew install mongodb-community@7.0
```

### 2. Start MongoDB Service

```bash
# Start MongoDB (runs in background)
brew services start mongodb-community@8.0

# OR start manually (runs in foreground):
# mongod --config /opt/homebrew/etc/mongod.conf
```

### 3. Verify MongoDB is Running

```bash
# Check if MongoDB is running
brew services list | grep mongodb

# Should show: mongodb-community@8.0 started
```

### 4. Test Connection (Optional)

```bash
# Connect to MongoDB shell
mongosh

# You should see MongoDB shell prompt
# Type 'exit' to quit
```

### 5. Update .env.local

The `.env.local` file is already configured for localhost:

```env
DATABASE_URI=mongodb://localhost:27017/scdp-pattern-library
```

This should work immediately! ✅

### 6. Start Your Dev Server

```bash
npm run dev
```

Visit: **http://localhost:3000/admin**

You should see the Payload CMS setup screen!

---

## MongoDB Management Commands

```bash
# Start MongoDB
brew services start mongodb-community@8.0

# Stop MongoDB
brew services stop mongodb-community@8.0

# Restart MongoDB
brew services restart mongodb-community@8.0

# Check status
brew services list
```

---

## Data Location

MongoDB stores data in:
```
/opt/homebrew/var/mongodb
```

Config file:
```
/opt/homebrew/etc/mongod.conf
```

Logs:
```
/opt/homebrew/var/log/mongodb
```

---

## Troubleshooting

### "brew: command not found"

Install Homebrew first:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### MongoDB won't start

```bash
# Check logs
tail -f /opt/homebrew/var/log/mongodb/mongo.log

# Ensure data directory exists
mkdir -p /opt/homebrew/var/mongodb

# Fix permissions
sudo chown -R $(whoami) /opt/homebrew/var/mongodb
```

### Connection refused

```bash
# Verify MongoDB is actually running
ps aux | grep mongod

# If not running, start it
brew services start mongodb-community@8.0
```

---

## Uninstall (if needed)

```bash
# Stop and remove service
brew services stop mongodb-community@8.0
brew uninstall mongodb-community@8.0

# Remove data (optional - BE CAREFUL)
# rm -rf /opt/homebrew/var/mongodb
```

---

## Alternative: Docker (if you prefer)

If you prefer Docker:

```bash
# Run MongoDB in Docker
docker run -d -p 27017:27017 --name mongodb \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password \
  mongo:latest

# Connection string would be:
# DATABASE_URI=mongodb://admin:password@localhost:27017/scdp-pattern-library?authSource=admin
```

Stop/start Docker MongoDB:
```bash
docker stop mongodb
docker start mongodb
```
