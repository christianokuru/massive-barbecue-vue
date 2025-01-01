import { defineStore } from "pinia";
import { reactive } from "vue";

export const useTestimonialStore = defineStore('testimonialStore', () => {
    const theTestimonials = reactive([
        {
            id: 1,
            name: 'Okuru Christian',
            location: 'Lekki',
            review: 'OMG!! This is the 5th time I am getting the Chicken Barbecue... It is truly the best in Lagos.',
            date: '12th-Jan-2024'
        },
        {
            id: 2,
            name: 'Bola Adewale',
            location: 'Victoria Island',
            review: 'Absolutely amazing! The barbecue was so tender and flavorful. My family loved it!',
            date: '14th-Jan-2024'
        },
        {
            id: 3,
            name: 'Samuel Adebayo',
            location: 'Ikeja',
            review: 'A friend recommended this place, and I’m so glad they did. Best barbecue I’ve ever tasted!',
            date: '18th-Jan-2024'
        },
        {
            id: 4,
            name: 'Ngozi Chukwu',
            location: 'Yaba',
            review: 'The food is always fresh, and the portions are generous. Highly recommend it to anyone who loves barbecue.',
            date: '20th-Jan-2024'
        },
        {
            id: 5,
            name: 'Tunde Olamide',
            location: 'Surulere',
            review: 'Perfectly cooked barbecue! The seasoning is just right, and it’s always a delightful experience.',
            date: '22nd-Jan-2024'
        },
        {
            id: 6,
            name: 'Chinonso Eze',
            location: 'Ajah',
            review: 'The Chicken BBQ is to die for! I am hooked and will definitely be coming back.',
            date: '25th-Jan-2024'
        },
        {
            id: 7,
            name: 'Folake Bello',
            location: 'Mushin',
            review: 'Hands down the best BBQ in Lagos. The meat was juicy and the flavor was out of this world.',
            date: '28th-Jan-2024'
        },
        {
            id: 8,
            name: 'Emmanuel Adeyemi',
            location: 'Festac',
            review: 'A great find! The barbecue was well-seasoned, and the service was excellent.',
            date: '1st-Feb-2024'
        },
        {
            id: 9,
            name: 'Olamide Ayodele',
            location: 'Ikorodu',
            review: 'I can’t get enough of the barbecue! I’ve been recommending it to everyone I know.',
            date: '3rd-Feb-2024'
        },
        {
            id: 10,
            name: 'Zainab Usman',
            location: 'Ojo',
            review: 'Fantastic! The flavor profile is unique, and the chicken is perfectly cooked every time.',
            date: '5th-Feb-2024'
        },
        {
            id: 11,
            name: 'Jide Bakare',
            location: 'Agege',
            review: 'Simply amazing. Every bite was a burst of flavor. I’ll be back for sure.',
            date: '7th-Feb-2024'
        },
        {
            id: 12,
            name: 'Titi Okafor',
            location: 'Badagry',
            review: 'The barbecue is always on point! A must-try for anyone in Lagos who loves grilled food.',
            date: '9th-Feb-2024'
        },
        {
            id: 13,
            name: 'Adebisi Folarin',
            location: 'Lagos Island',
            review: 'The taste of the barbecue was incredible. One of the best meals I’ve had in a while.',
            date: '11th-Feb-2024'
        },
        {
            id: 14,
            name: 'Micheal Ojo',
            location: 'Ikoyi',
            review: 'Unbelievably tasty! The barbecue is cooked to perfection, and the seasoning is just right.',
            date: '13th-Feb-2024'
        },
        {
            id: 15,
            name: 'Benedicta Oyedepo',
            location: 'Gbagada',
            review: 'I had the barbecue at a family gathering, and it was a hit. Everyone loved it!',
            date: '15th-Feb-2024'
        },
        {
            id: 16,
            name: 'Shola Abiola',
            location: 'Epe',
            review: 'I have been craving this BBQ for days. The taste is unforgettable, and the portions are large.',
            date: '17th-Feb-2024'
        },
        {
            id: 17,
            name: 'Oluwaseun Olatunji',
            location: 'Shomolu',
            review: 'The barbecue is top-notch! I love the smokiness and the juicy texture. Keep it up!',
            date: '19th-Feb-2024'
        },
        {
            id: 18,
            name: 'Durojaiye Akinlolu',
            location: 'Ketu',
            review: 'This is what a barbecue should taste like! I am so impressed with the flavors and quality.',
            date: '21st-Feb-2024'
        },
        {
            id: 19,
            name: 'Akintoye Farouk',
            location: 'Isolo',
            review: 'I had the barbecue for the first time yesterday, and I’m already a fan. Amazing!',
            date: '23rd-Feb-2024'
        },
        {
            id: 20,
            name: 'Chuka Onwubiko',
            location: 'Lekki Phase 1',
            review: 'I always enjoy the barbecue here. The flavor and texture are always on point. One of my favorites.',
            date: '25th-Feb-2024'
        },
        {
            id: 21,
            name: 'Adebayo Solomon',
            location: 'Iyana-Ipaja',
            review: 'Delicious BBQ! The taste is consistent, and it’s always a joy to eat here.',
            date: '27th-Feb-2024'
        },
        {
            id: 22,
            name: 'Rita Chigozie',
            location: 'Apapa',
            review: 'If you haven’t tried the barbecue here, you’re missing out. Truly the best in Lagos!',
            date: '1st-Mar-2024'
        },
        {
            id: 23,
            name: 'Fola Williams',
            location: 'Lekki Phase 2',
            review: 'I can’t stop thinking about the BBQ I had here. Simply the best I’ve had in a long time.',
            date: '3rd-Mar-2024'
        },
        {
            id: 24,
            name: 'Uche Nwosu',
            location: 'Ojota',
            review: 'The flavors are perfect, and the food is always served fresh. A must-try in Lagos.',
            date: '5th-Mar-2024'
        },
        {
            id: 25,
            name: 'Chima Okonkwo',
            location: 'Ikeja GRA',
            review: 'The barbecue was out of this world. Can’t wait to try it again next weekend!',
            date: '7th-Mar-2024'
        }
    ]);

    return { theTestimonials };
});
