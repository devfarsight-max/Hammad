const image = (name) => new URL(`../assets/images/${name}.jpg`, import.meta.url).href

export const products = [
  { id: 'milk', name: 'Fresh Milk', category: 'Milk', image: image('milk'), featuredImage: image('milk-featured'), description: 'A clean, creamy everyday staple for drinking, cooking and coffee.' },
  { id: 'paneer', name: 'Fresh Paneer', category: 'Cultured & Fresh', image: image('paneer'), featuredImage: image('paneer-featured'), description: 'Soft, mild blocks that hold their shape in curries and on the grill.' },
  { id: 'ghee', name: 'Traditional Ghee', category: 'Butter & Ghee', image: image('ghee'), featuredImage: image('ghee-featured'), description: 'Golden clarified butter with a gently nutty aroma and a rich finish.' },
  { id: 'curd', name: 'Set Curd', category: 'Cultured & Fresh', image: image('curd'), description: 'Thick, gently tangy curd for serving at the table or whisking into marinades.' },
  { id: 'butter', name: 'Creamery Butter', category: 'Butter & Ghee', image: image('butter'), description: 'Smooth butter with a rounded dairy flavour for baking, spreading and cooking.' },
]

export const categories = [...new Set(products.map(({ category }) => category))]

