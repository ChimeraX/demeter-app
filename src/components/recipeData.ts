import Recipe from '../model/Recipe';

const recipe: Recipe = {
    id: 0,
    name: 'Shrimp and Chorizo Paella',
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests.',
    duration: 120,
    // image: 'https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914',
    image:
        'https://fthmb.tqn.com/gUHLXFlrRL8aGld-Y61iFHaZQDs=/3643x2733/filters:no_upscale()/fresh-paella-in-pan-on-wooden-table-556668991-5843564b5f9b5851e5745d5a.jpg',
    steps: [
        {
            id: 1,
            order: 1,
            description: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes',
        },
        {
            id: 2,
            order: 2,
            description:
                'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high' +
                'heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly' +
                'browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken' +
                'and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and' +
                'pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add' +
                'saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
        },
        {
            id: 3,
            order: 3,
            description:
                'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook' +
                'without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to' +
                'medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook' +
                'again without stirring, until mussels have opened and rice is just tender, 5 to 7' +
                'minutes more. (Discard any mussels that don’t open.)',
        },
        {
            id: 4,
            order: 4,
            description: 'Set aside off of the heat to let rest for 10 minutes, and then serve.',
        },
        {
            id: 5,
            order: 5,
            description: 'Add 1 cup of frozen peas along with the mussels, if you like.',
        },
    ],
    ingredients: [
        {
            id: 12,
            ingredient: {
                id: 1,
                name: 'chorizo',
            },
            quantity: 100,
            unit: 'piece',
        },
        {
            id: 13,
            ingredient: {
                id: 2,
                name: 'oil',
            },
            quantity: 1,
            unit: 'L',
        },
        {
            id: 14,
            ingredient: {
                id: 3,
                name: 'chicken',
            },
            quantity: 4,
            unit: 'kg',
        },
        {
            id: 15,
            ingredient: {
                id: 4,
                name: 'pimento',
            },
            quantity: 1,
            unit: 'L',
        },
        {
            id: 16,
            ingredient: {
                id: 5,
                name: 'garlic',
            },
            quantity: 4,
            unit: 'kg',
        },
    ],
};

export default recipe;