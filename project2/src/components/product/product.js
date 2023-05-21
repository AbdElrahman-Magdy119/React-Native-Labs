
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, Card } from '@rneui/themed';
import { Button, ScrollView } from 'react-native';


export default function products({navigation}) {

    const [Products, setProducts] = useState([])

    useEffect(() => {
        // call api --> axios 

        axios.get("https://dummyjson.com/products")
        .then((res) => setProducts(res.data.products))

        .catch((err) => alert(err))

    }, [])

       
  return (
       
      <ScrollView>
        <Text>  List Products    </Text>

        {Products.map((Product, index)  => {
            return(
                <Card key={index}>
                    <Card.Title>{Product.title}</Card.Title>
                    <Card.Divider />
                    <Card.Image
                    style={{ padding: 0 }}
                    source={{
                        uri: Product.images[0]
                        
                    }}
                    />
                    <Text style={{ marginBottom: 10 }}> {Product.description}
                    </Text>

                    <Button title='ProductDetails' onPress={() => navigation.navigate("productDetails", {id: Product.id})} />
           
                </Card>
            )


        }  )}
      </ScrollView>
     
  );
}

