
import React, { createContext, useState } from 'react'
import avatar from "../assets/img/avatar-profile.jpg"
import card from "../assets/img/Teach Online PNG Transparent, Online Teaching Linear Education Information, Chemistry Clipart, Computer, Online Education PNG Image For Free Download.jpeg"
import item6 from "../assets/img/item-02.jpg"
import item2 from "../assets/img/product-detail-03.jpg"
import item3 from "../assets/img/product-detail-02.jpg"
import item4 from "../assets/img/product-detail-01.jpg"
import item5 from "../assets/img/gallery-13.jpg"
import item from "../assets/img/item-11.jpg"
import item1 from "../assets/img/item-01.jpg"
// import item6 from "../assets/img/item-02.jpg"
import item7 from "../assets/img/item-03.jpg"
import item8 from "../assets/img/item-04.jpg"
import item9 from "../assets/img/item-05.jpg"
import item10 from "../assets/img/item-06.jpg"
import item11 from "../assets/img/item-07.jpg"
import item12 from "../assets/img/item-08.jpg"
export const MyContext = createContext()
export const MyProvider = ({ children }) => {

    // const [test, setTest] = useState('Hello Test')

    const [myProduct, setProduct] = useState([
        {
            id:"1",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            Price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            Catégories: "Best seller",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            logDescrition:"redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",
            image : item,
        }, {
            id:"2",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            Price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            Catégories: "Featured",
            Brand: " w i s s ",
            logDescrition:"redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",

            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image : item2,
        }, {
            id:"3",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            Price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            Catégories: "Men",
            logDescrition:"redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",

            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image : item3,
        }, {
            id:"4",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            Price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            Catégories: "   Women",
            logDescrition:"redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",

            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image : item4,
        },  {
            id:"5",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            Price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            Catégories:"Best seller" ,
            logDescrition:"redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",

            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image : item5,
        },
        {
            id:"6",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            Price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            logDescrition:"redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",

            Catégories: "Best seller",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image : item6,
        },{
            id:"7",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            Price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            logDescrition:"redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",

            Catégories: "Best seller",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image : item1,
        },{
            id:"8",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            Price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            logDescrition:"redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",

            Catégories: "Best seller",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image : item7,
        },{
            id:"9",
            Name: "ruehdn rhedn jrfhbe hrjfbe",
            Price: "$200",
            DescriptionS: "admin",
            Size: [],
            quantity: [],
            logDescrition:"redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhunredjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj eruyfdhun ",

            Catégories: "Best seller",
            Brand: " w i s s ",
            Decription: " redjn edjksn jek'znd 'jnre nejdk,s bendk,s 'rnje edhn, rfbhen rbfehjn eufhdbj ",
            image : item8,
        }
    ])








    return (
        <>
            <MyContext.Provider value={[myProduct, setProduct]} >
                {children}
            </MyContext.Provider>
        </>
    )
}
