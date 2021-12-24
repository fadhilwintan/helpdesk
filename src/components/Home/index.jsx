import React, {useState, useEffect} from 'react'
import {Flex} from './styles'
import axios from 'axios'



const Home = () => {
    const [number, setNumber] = useState(0)
    const handlePlus = () => {
        setNumber(number + 1)
    }
    const handleMin = () => {
        setNumber(number - 1)
    }
    const [value, setValue] = useState([])
    useEffect(() => (
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            const data = res.data 
            setValue(data) 
        })

    ))

    return (
        <>
          <Flex direction="row" justify="center" wrap="wrap">
            <h1>{number}</h1>
            <Flex direction="row">
            <button onClick={handlePlus}> + </button>
            <button onClick={handleMin}> - </button>
            <ul>
                {value.map(items => (
                    <li>{items.title}</li>
                ))}
            </ul>
            </Flex>

                <Flex direction="column">
                    <p> column 1</p>
                </Flex>
                <Flex direction="column">
                    <p> column 1</p>
                </Flex>
                <Flex direction="column">
                    <p> column 1</p>
                </Flex><Flex direction="column">
                    <p> column 1</p>
                </Flex><Flex direction="column">
                    <p> column 1</p>
                </Flex>
        </Flex>   
        </>
    )
}
 export default Home