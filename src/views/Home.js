import {ScrollView, StyleSheet, View} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import * as React from 'react';

const list = [
    {
        name: 'Air Jordan 1 Low 1',
        image: 'https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/b9026d85-06bd-4629-a727-dd68f6c49807/air-jordan-1-low-shoe-z3Tl2VeJ.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        name: 'Nike SuperRep Go',
        image: 'https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/i1-29a5195b-aa65-48a9-80f6-72166078abdc/superrep-go-mens-training-shoe-19sK4X.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    }, {
        name: 'Nike Air Max 95 (Korea)',
        image: 'https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/5efc19ea-b3b5-428b-9558-bf4ca3f6d05f/air-max-95-korea-shoe-ZKTfcL.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        name: 'Nike Air Vapormax 360',
        image: 'https://cdn8.bigcommerce.com/s-jrah6gmn/products/167/images/398/ablebrewingsystem4_1024x1024__07155__93974.1534344516.560.850.jpg?c=2',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    }, {
        name: 'Amy Farha',
        image: 'https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/i1-9944e829-002c-4a6b-93ed-cc8801c7eb0c/air-vapormax-360-mens-shoe-b09bdB.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        name: 'Chris Jackson',
        image: 'https://cdn8.bigcommerce.com/s-jrah6gmn/products/167/images/398/ablebrewingsystem4_1024x1024__07155__93974.1534344516.560.850.jpg?c=2',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    }, {
        name: 'Amy Farha',
        image: 'https://cdn8.bigcommerce.com/s-jrah6gmn/products/174/images/425/leparfaitmedium3_1024x1024_1024x1024__37756__81924.1534344526.560.850.jpg?c=2',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        name: 'Chris Jackson',
        image: 'https://cdn8.bigcommerce.com/s-jrah6gmn/products/167/images/398/ablebrewingsystem4_1024x1024__07155__93974.1534344516.560.850.jpg?c=2',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
];
export default function HomeScreen({navigation}) {
    const goToView2 = (i) => {
        return navigation.navigate('Details', {itemId: i});
    };
    return (
        <ScrollView>
            <View>
                {
                    list.map((l, i) => (
                        <ListItem key={i} button onPress={() => goToView2(i)}>
                            <Avatar rounded  size={80}
                                    source={{uri: l.image}} />
                            <ListItem.Content>
                                <ListItem.Title>{l.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    cardImage: {
        height: 80,
        width: 80,
    },
});
