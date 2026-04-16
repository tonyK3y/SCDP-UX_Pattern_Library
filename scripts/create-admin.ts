import { getPayload } from 'payload'
import config from '../payload.config'

async function createAdmin() {
  try {
    const payload = await getPayload({ config: await config })

    // Create the first admin user
    const user = await payload.create({
      collection: 'users',
      data: {
        email: 'admin@coupa.com',
        password: 'admin123',
        name: 'Admin User',
      },
    })

    console.log('✅ Admin user created successfully!')
    console.log('Email: admin@coupa.com')
    console.log('Password: admin123')
    console.log('\nYou can now login at http://localhost:3000/admin')

    process.exit(0)
  } catch (error) {
    console.error('❌ Error creating admin user:', error)
    process.exit(1)
  }
}

createAdmin()
