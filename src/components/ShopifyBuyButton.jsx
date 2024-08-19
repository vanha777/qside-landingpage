import React, { useEffect, useRef } from 'react';
import ShopifyBuy from '@shopify/buy-button-js';

const ShopifyBuyButton = ({ productId }) => {
    const buttonRef = useRef(null);
    const id = `buybutton-${productId}`;
    useEffect(() => {
        console.log('Rendering Shopify Buy Button');
        // Prevent re-initialization if the button has already been created
        if (buttonRef.current) return;

        const client = ShopifyBuy.buildClient({
            domain: 'e67c7d-b3.myshopify.com',
            storefrontAccessToken: 'e8dca90b408f9cec15ceb7e6339d2b29',
        });

        const ui = ShopifyBuy.UI.init(client);

        ui.createComponent('product', {
            id: productId,
            node: document.getElementById(id),
            // node: buttonRef.current, // Use ref instead of ID
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
                iframe: true,
                product: {
                    iframe: true,
                    buttonDestination: 'modal',
                    contents: {
                        img: true,
                        title: true,
                        price: true,
                        options: false,
                    },
                    text: {
                        button: 'Add to cart',
                    },
                    // styles: {
                    //     button: {
                    //         'background-color': '#ff5722',
                    //         'font-size': '18px',
                    //         'padding': '10px 20px',
                    //         'border-radius': '5px',
                    //         ':hover': {
                    //             'background-color': '#e64a19',
                    //         },
                    //         'color': '#fff',
                    //         'font-weight': 'bold',
                    //     },
                    // },
                },
                cart: {
                    iframe: true,
                },
                modalProduct: {
                    contents: {
                        img: true,
                        title: true,
                        price: true,
                        options: true,
                        button: true,
                        quantity: true,
                    },
                },
            },
        });

        // Mark the button as initialized
        buttonRef.current = true;
    }, [productId]);

    return <div id={id} />;
};

export default ShopifyBuyButton;

