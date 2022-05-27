import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Image from 'next/image'

export default function Home() {
  const [name, setName] = useState('')
  const [file, setFile] = useState()
  const [data, setData] = useState([])
  const [image, setImage] = useState()

  const getData = () => {
    axios
      .get('http://localhost:8000/party')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // const getImages = () => {
  //   data.map((item, index) => {
  //     return axios
  //       .get(
  //         `http://localhost:8000/party/uploads/e5fbe4455e133e91021d89f1aa77110e7f.svg`
  //       )
  //       .then((response) => {
  //         setImage(response.data)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   })
  // }

  // getImages()

  useEffect(() => {
    getData()
  })

  const submitForm = (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append('logo', file)
    formdata.append('party_name', name)
    axios
      .post('http://localhost:8000/party/create', formdata)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className={styles.container}>
      <form onSubmit={submitForm}>
        <input
          type='text'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='file'
          placeholder='Image Upload'
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type='submit'>Add Selected</button>
      </form>

      {data.map((item, index) => {
        return (
          <div key={index}>
            {item.party_name}
            <img
              src={`http://localhost:8000/party/uploads/${item.logo}`}
              alt='Picture of the author'
              width={100}
              height={100}
            />
          </div>
        )
      })}
    </div>
  )
}
