import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'ดาบปลายปืน ', img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJS-c6mmIW0mvLwOq7c2G1Qv8R13OuR8I2t0QPh-Rc9N2H7Io_GdlU7NVjW_lPsxu69g8K-v8zXiSw0Yvgo3Co', price:  26482.16 },
    { name: ' มีดบาลิซอง ', img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPP1PrrClX5C15whteHE9Jrsxgfn-RA-MGH2INeSdVNsNA2D_VTskLq5hcS1tZrOmnExuiR35yrbmh2pwUYbTfzKguk', price: 42412.21 },
    { name: ' มีดทาลอน ', img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-KmsjwPKvBmm5D19V5i_rEprPigVC7vCwwOj6rYJiQJFJvNF6D_gfvwOnvgsTqup3Bm3Iy7CRztn2JmBfm0xAdZ-c816OfVxzAUCeK9YIM', price: 51227.91 },
    { name: 'มีดชก ', img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfw-bbeQJB-eOmgZODqPv7Ib7ummJW4NE_3byWp9yn2AO1_RVkNzv6cIHGelQ4MFHSqVC_wL3ogpDp7snKzHdjsj5iuygnWOlCGA', price: 21214.87 },
    { name: ' มีดคารัมบิต ', img: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0h-LmI7fUqWZU7Mxkh6eY9NjwjlHs_BJtaz33INSUJ1U9YQ2D8gLoxr_u0cDp6JXOwSBjvyQq-z-DyE4J5esf', price: 32859.00 },
    { name: ' มีดสเกเลตัน', img:'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJlY20jfL2IbrummJW4NE_3b7D8dSn21DsrRdsNmvyd9SVcAVrZlqErFHsyO6-1MK-u5rJwXdn7j5iuyhVuujEYg', price: 59600.02},
    { name: 'มีดคลาสสิก ', img:'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTjVb09iyhIGfqPv9NLPF2D0Hv5EhjuuXotWi2Qfnr0E4YT30JoKVIAVtNF_QrFS9wbvm1JbttJzXiSw0QpjY1T0', price: 13244.37},
    { name: ' มีดสติลเล็ตโต', img:'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJlYG0kfbwNoTdn2xZ_Ityj7rDp4qjjFC3-xJuMGz3IIWUcA5oZFvVrlnokO-90JfttJ2dziQypGB8soIAQfsS', price: 41131.44 },

  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
