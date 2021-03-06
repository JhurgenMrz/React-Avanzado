import React, { Fragment ,useState, useEffect} from 'react'
import {Category} from '../Category'
import {Item, List} from '../ListOfCategories/styles'
import {Loading} from '../Loading'

function useCategoriesData(){
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(function(){
        setLoading(true)
        window.fetch('https://petgram-api-jm.now.sh/categories')
            .then(res => res.json())
            .then(response => {
                setCategories(response)
                setLoading(false)
            })
    },[])

    return { categories, loading }
}

export const ListOfCategories = ()=>{

    const { categories, loading } = useCategoriesData()

    const [showFixed, setShowFixed] = useState(false)

    

    useEffect(()=>{
        const onScroll = e =>{
            const newShowFixed = window.scrollY > 200
            showFixed != newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll);

        return () => document.removeEventListener('scroll', onScroll)
    },[showFixed])

    const renderList =(fixed)=>(
        <List fixed={fixed}>
            {
                loading 
                ? 
                // <Item key='loading'><Category /></Item>
                <Loading/>
                :
                categories.map((category)=>(
                    <Item key={category.id}>
                        <Category {...category} path={`/pet/${category.id}`}/>
                    </Item>
                ))
            }
        </List>
    )


    return(

        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    )
}