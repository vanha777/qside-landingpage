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
                    // iframe: true,
                    buttonDestination: 'modal', //'cart', 'modal', 'checkout', 'onlineStore'
                    layout:"vertical",
                    width: "100%",
                    contents: {
                        img: true,
                        title: true,
                        price: true,
                        options: false, // Hide options dropdown
                    },
                    text: {
                        button: 'Select',
                        outOfStock: 'Out of stock',
                        unavailable: 'Unavailable',
                    },
                    styles: {
                        product: {
                            iframe: {
                                height: '400px',
                                backgroundColor: '#ff5722' // Ensure background color is set
                              },
                          },
                        button: {
                            'background-color': '#ff5722',
                            'font-size': '18px',
                            'padding': '12px 24px',
                            'border-radius': '8px',
                            ':hover': {
                                'background-color': '#e64a19',
                            },
                            'color': '#fff',
                            'font-weight': 'bold',
                        },
                        title: {
                            'font-size': '16px',
                            'font-weight': 'bold',
                            'color': '#ffffff',
                        },
                        price: {
                            'font-size': '14px',
                            'color': '#666',
                        },
                        img: {
                            'border-radius': '8px',
                            // 'max-width': '100%',
                            // 'height': '50%',
                        },
                    },
                },
                cart: {
                    // iframe: true,
                    text:{
                        title: 'Cart',
                        empty: 'Your cart is empty.',
                        button: 'Checkout',
                        total: 'Subtotal',
                        currency: 'AUD',
                        notice: 'Shipping and discount codes are added at checkout.',
                        noteDescription: 'Special instructions for seller',
                    },
                    lineItem:{
                        contents:{
                            image: true,
                            variantTitle: true,
                            title: true,
                            price: false,
                            priceWithDiscounts: true,
                            quantity: true,
                            quantityIncrement: true,
                            quantityDecrement: true,
                            quantityInput: true,
                        }
                    },
                    styles: {
                        button: {
                            'background-color': '#ff5722',
                            'font-size': '18px',
                            'padding': '12px 24px',
                            'border-radius': '8px',
                            ':hover': {
                                'background-color': '#e64a19',
                            },
                            'color': '#fff',
                            'font-weight': 'bold',
                        },
                    },
                },
                modalProduct: {
                    contents: {
                        img: false,
                        title: true,
                        price: true,
                        options: true,
                        button: true,
                        quantity: true,
                        count: true,
                        // icon: true,
                        imgWithCarousel: true,
                    },
                    text:{
                        button:"Add to cart"
                    },
                    title: 'cart',
                    styles: {
                        product: {
                            'text-align': 'center',
                            'height':"100%",
                            "width":"100%"
                        },
                        img: {
                            'border-radius': '8px',
                            'max-width': '100%',
                        },
                        title: {
                            'font-size': '24px',
                            'font-weight': 'bold',
                            'color': '#333',
                        },
                        price: {
                            'font-size': '20px',
                            'color': '#666',
                        },
                        options: {
                            // 'margin-bottom': '15px',
                        },
                        button: {
                            'background-color': '#ff5722',
                            'font-size': '18px',
                            'padding': '12px 24px',
                            'border-radius': '8px',
                            ':hover': {
                                'background-color': '#e64a19',
                            },
                            'color': '#fff',
                            'font-weight': 'bold',
                        },
                    },
                },
                window:{
                    height: 600,
                    width: 600,
                    toolbar: 0,
                    scrollbars: 0,
                    status: 0,
                    resizable: 1,
                    left: 0,
                    top: 0,
                    center: 0,
                    createnew: 1,
                    location: 0,
                    menubar: 0,
                    onUnload: null,
                }
            },
        });

        // Mark the button as initialized
        buttonRef.current = true;
    }, [productId]);

    return <div id={id} />;
};

export default ShopifyBuyButton;

