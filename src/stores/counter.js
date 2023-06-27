import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '../router'
import Swal from 'sweetalert2'

export const useUserStore = defineStore('users', {
  state: () => ({
    users: []
  }),
  actions: {
    async renderUsers() {
      try {
        const response = await fetch('https://dummyjson.com/users')
        if (!response.ok) {
          throw new Error('Error fetching data')
        }
        const data = await response.json()
        // console.log(data.users)
        this.users = data.users
      } catch (err) {
        console.log(err)
      }
    },
    async delUser(id) {
      try {
        console.log(id, 'sampe')
        const response = await fetch(`https://dummyjson.com/users/${id}`, {
          method: 'DELETE'
        })
        if (!response.ok) {
          throw new Error('Error delete data')
        }
        const data = await response.json()
        console.log(data)
        Swal.fire({
          icon: 'success',
          title: 'Data has been deleted successfully'
        })
        this.users = this.users.filter((user) => user.id !== id)
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: {}
})

export const useUseraddStore = defineStore('user', {
  state: () => ({
    user: []
  }),
  actions: {
    async postUser(data) {
      try {
        console.log(data, 'data add')
        const response = await fetch('https://dummyjson.com/users/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        if (!response.ok) {
          throw new Error('Error Post data')
        }
        const datares = await response.json()
        console.log(datares)
        // this.users = data.users
        Swal.fire({
          icon: 'success',
          title: 'Data has been added'
        })
        router.push('/')
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: {}
})

// export const useDeleteuserStore = defineStore('userData', {
//   state: () => ({}),
//   actions: {
//     async delUser(id) {
//       try {
//         console.log(id, 'sampe')
//         const response = await fetch(`https://dummyjson.com/users/${id}`, {
//           method: 'DELETE'
//         })
//         if (!response.ok) {
//           throw new Error('Error delete data')
//         }
//         // const data = await response.json()
//         // console.log(data.users)
//         // this.users = data.users
//       } catch (err) {
//         console.log(err)
//       }
//     }
//   },
//   getters: {}
// })
export const useGetOneStore = defineStore('userData', {
  state: () => ({
    userDataOne: []
  }),
  actions: {
    async getoneUser(id) {
      try {
        console.log(id, 'sampe')
        const response = await fetch(`https://dummyjson.com/users/${id}`)
        if (!response.ok) {
          throw new Error('Error delete data')
        }
        const data = await response.json()
        console.log(data)
        this.userDataOne = data
        // console.log(this.userDataOne)
        router.push(`/edituser/${id}`)
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: {}
})

export const useUpdateUserStore = defineStore('UpdateUser', {
  state: () => ({}),
  actions: {
    async updateUserPost(data) {
      console.log(data, 'sebelum response')
      try {
        console.log(data.id, 'sampe')
        const response = await fetch(`https://dummyjson.com/users/${data.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        console.log(response, 'response')
        if (!response.ok) {
          throw new Error('Error update data')
        }
        const resData = await response.json()
        console.log(resData, 'ini hasil response')
        Swal.fire({
          icon: 'success',
          title: 'Data has been updated successfully'
        })
        router.push(`/`)
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: {}
})
