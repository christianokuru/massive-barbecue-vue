import { defineStore } from "pinia";
import { reactive } from "vue";

export const useTestimonialStore = defineStore('testimonialStore', () => {
    const theTestimonials = reactive([
        {
            id: 1,
            name: 'Okuru Christian',
            location: 'Lekki',
            review: 'OMG!! This is the 5th time I am getting the Chicken Barbeque... It is truly the best in Lagos.',
            date: '12th-Feb-2024'
        },
        {
            id: 2,
            name: 'Bola Adewale',
            location: 'Victoria Island',
            review: 'Absolutely amazing! The Barbeque was so tender and flavorful. My family loved it!',
            date: '14th-Jan-2024'
        },
        {
            id: 3,
            name: 'Samuel Adebayo',
            location: 'Ikeja',
            review: 'A friend recommended this place, and I’m so glad they did. Best Barbeque I’ve ever tasted!',
            date: '18th-April-2024'
        },
        {
            id: 4,
            name: 'Ngozi Chukwu',
            location: 'Yaba',
            review: 'The food is always fresh, and the portions are generous. Highly recommend it to anyone who loves Barbeque.',
            date: '20th-Oct-2024'
        },
        {
            id: 5,
            name: 'Tunde Olamide',
            location: 'Surulere',
            review: 'Perfectly cooked Barbeque! The seasoning is just right, and it’s always a delightful experience.',
            date: '22nd-Feb-2024'
        },
        {
            id: 6,
            name: 'Chinonso Eze',
            location: 'Ajah',
            review: 'The Chicken BBQ is to die for! I am hooked and will definitely be coming back.',
            date: '25th-May-2024'
        },
        {
            id: 7,
            name: 'Folake Bello',
            location: 'Mushin',
            review: 'Hands down the best BBQ in Lagos. The meat was juicy and the flavor was out of this world.',
            date: '28th-May-2024'
        },
        {
            id: 8,
            name: 'Emmanuel Adeyemi',
            location: 'Festac',
            review: 'A great find! The Barbeque was well-seasoned, and the service was excellent.',
            date: '1st-Feb-2024'
        },
        {
            id: 9,
            name: 'Olamide Ayodele',
            location: 'Ikorodu',
            review: 'I can’t get enough of the Barbeque! I’ve been recommending it to everyone I know.',
            date: '1st-Feb-2024'
        },
        {
            id: 10,
            name: 'Zainab Usman',
            location: 'Ojo',
            review: 'Fantastic! The flavor profile is unique, and the chicken is perfectly cooked every time.',
            date: '5th-Nov-2024'
        },
        {
            id: 11,
            name: 'Jide Bakare',
            location: 'Agege',
            review: 'Simply amazing. Every bite was a burst of flavor. I’ll be back for sure.',
            date: '7th-Nov-2024'
        },
        {
            id: 12,
            name: 'Titi Okafor',
            location: 'Badagry',
            review: 'The Barbeque is always on point! A must-try for anyone in Lagos who loves grilled food.',
            date: '9th-Sept-2024'
        },
        {
            id: 13,
            name: 'Adebisi Folarin',
            location: 'Lagos Island',
            review: 'The taste of the Barbeque was incredible. One of the best meals I’ve had in a while.',
            date: '11th-Dec-2024'
        },
        {
            id: 14,
            name: 'Micheal Ojo',
            location: 'Ikoyi',
            review: 'Unbelievably tasty! The Barbeque is cooked to perfection, and the seasoning is just right.',
            date: '13th-Dec-2024'
        },
        {
            id: 15,
            name: 'Benedicta Oyedepo',
            location: 'Gbagada',
            review: 'I had the Barbeque at a family gathering, and it was a hit. Everyone loved it!',
            date: '15th-Dec-2024'
        },
        {
            id: 16,
            name: 'Shola Abiola',
            location: 'Epe',
            review: 'I have been craving this BBQ for days. The taste is unforgettable, and the portions are large.',
            date: '17th-Oct-2024'
        },
        {
            id: 17,
            name: 'Oluwaseun Olatunji',
            location: 'Shomolu',
            review: 'The Barbeque is top-notch! I love the smokiness and the juicy texture. Keep it up!',
            date: '19th-March-2024'
        },
        {
            id: 18,
            name: 'Durojaiye Akinlolu',
            location: 'Ketu',
            review: 'This is what a Barbeque should taste like! I am so impressed with the flavors and quality.',
            date: '21st-July-2024'
        },
        {
            id: 19,
            name: 'Akintoye Farouk',
            location: 'Isolo',
            review: 'I had the Barbeque for the first time yesterday, and I’m already a fan. Amazing!',
            date: '23rd-Aug-2024'
        },
        {
            id: 20,
            name: 'Chuka Onwubiko',
            location: 'Lekki Phase 1',
            review: 'I always enjoy the Barbeque here. The flavor and texture are always on point. One of my favorites.',
            date: '25th-Aug-2024'
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
            review: 'If you haven’t tried the Barbeque here, you’re missing out. Truly the best in Lagos!',
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
            review: 'The Barbeque was out of this world. Can’t wait to try it again next weekend!',
            date: '7th-Mar-2024'
        }
    ]);

    return { theTestimonials };
});
