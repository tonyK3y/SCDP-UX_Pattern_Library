import bcrypt from 'bcrypt'
import Database from 'better-sqlite3'

async function createAdmin() {
  try {
    const db = new Database('payload.db')

    // Check if user already exists
    const existing = db.prepare('SELECT * FROM users WHERE email = ?').get('admin@coupa.com')
    if (existing) {
      console.log('❌ Admin user already exists!')
      process.exit(1)
    }

    // Generate salt and hash for password
    const saltRounds = 10
    const password = 'admin123'
    const salt = await bcrypt.genSalt(saltRounds)
    const hash = await bcrypt.hash(password, salt)

    // Insert user
    const insert = db.prepare(`
      INSERT INTO users (name, email, salt, hash)
      VALUES (?, ?, ?, ?)
    `)

    const result = insert.run('Admin User', 'admin@coupa.com', salt, hash)

    console.log('✅ Admin user created successfully!')
    console.log('Email: admin@coupa.com')
    console.log('Password: admin123')
    console.log('\nYou can now login at http://localhost:3000/admin')

    db.close()
    process.exit(0)
  } catch (error) {
    console.error('❌ Error creating admin user:', error)
    process.exit(1)
  }
}

createAdmin()
