import React from 'react'
import devConstruction1 from '../assets/devConstruction1.png';
import devConstruction2 from '../assets/devConstruction2.png'; 
import devConstruction3 from '../assets/devConstruction3.png';
import devConstruction4 from '../assets/devConstruction4.png';
import devConstruction5 from '../assets/devConstruction5.png';
import devConstruction6 from '../assets/devConstruction6.png';
import devConstruction7 from '../assets/devConstruction7.png';
import devConstruction8 from '../assets/devConstruction8.png';
import devConstruction9 from '../assets/devConstruction9.png';
import devConstruction10 from '../assets/devConstruction10.png';
import devConstruction11 from '../assets/devConstruction11.png';
import devConstruction12 from '../assets/devConstruction12.png';
import devConstruction13 from '../assets/devConstruction13.png';
import devConstruction14 from '../assets/devConstruction14.png';
import may24Img1 from "../assets/may24_1st.png";
import may24Img2 from "../assets/may24_2nd.png";
import may24Img3 from "../assets/may24_3rd.png";
import may24Img4 from "../assets/may24_4th.png";
import may24Img5 from "../assets/may24_5th.png";
import may14Img1 from "../assets/may14_1st.png";
import may14Img2 from "../assets/may14_2nd.png";
import may14Img3 from "../assets/may14_3rd.png";
import may14Img4 from "../assets/may14_4th.png";
import may8Img1 from "../assets/may8_1st.png";
import may8Img2 from "../assets/may8_2nd.png";
import may8Img3 from "../assets/may8_3rd.png";
import april27Img1 from "../assets/april27_1st.png";
import april27Img2 from "../assets/april27_2nd.png";
import april27Img3 from "../assets/april27_3rd.png";
import april12Img1 from "../assets/april12_1st.png";
import april12Img2 from "../assets/april12_2nd.png";
import april11Img1 from "../assets/april11_1st.png";
import april11Img2 from "../assets/april11_2nd.png"

export const monthConfiguration = {
    June: {
        title: 'Development Updates',
        subtitle: 'As at June 2025',
        updates: [
            {
                id: "update-21",
                date: "21st June",
                content: [
                    'We are casting the roof slab now with treated concrete. Casting of the roof slab and capping the retainwall beams will be completed tomorrow.',
                    'We will commence the gable walls from next week.',
                    'Electrical piping has been completed, mechanical piping still ongoing almost completed. Gate house/fence and water treatment room at 50% level.'
                ],
                images: [devConstruction1, devConstruction2, devConstruction3, devConstruction4, devConstruction5],
                layout: 'June1',
                bgColor: 'bg-white',
                textColor: 'text-[#822e27]',
                iconColor: 'bg-[#6ca2e3]'
            },
            {
              id: 'update-14',
              date: '14th June',
              content: [
                'Reinforcements to roof slab completed, cover to concrete slab ongoing. Services to roof also electrical and mechanical installations to roof also ongoing and almost completed for next week.',
                'First fix piping work for electrical and mechanical services are ongoing for the entire building.',
                'Gate house and water treatment house has commenced to slab level.'
              ],
              images: [devConstruction6, devConstruction7, devConstruction8, devConstruction9, devConstruction10],
              layout: 'June2',
              bgColor: 'bg-[#822e27]',
              textColor: 'text-[#fbfbfb]',
              iconColor: 'bg-[#fbfbfb]'
            },
            {
              id: 'update-5',
              date: '5th June',
              content: [
                'Reinforcements to roof slab will be completed by weekend. Service pipes will be installed by next week and casting will be done before next weekend.'
              ],
              images: [devConstruction11, devConstruction12, devConstruction13, devConstruction14],
              layout: 'June3',
              bgColor: 'bg-white',
              textColor: 'text-[#822e27]',
              iconColor: 'bg-[#822e27]'
            }
        ]
    },
    May: {
        title: 'Development Updates',
        subtitle: 'As at May 2025',
        updates: [
            {
                id: "update-30",
                date: "30th May",
                content: [
                    'Formwork to roof slab is ongoing to be completed next week. Reinforcement to roof slab also commenced to be completed next week as well. Electrical and mechanical piping to commence next week. Scaffolding in place for the commencement of finishes'
                ],
                images: [devConstruction1, devConstruction2, devConstruction3],
                layout: 'May1',
                bgColor: 'bg-white',
                textColor: 'text-[#822e27]',
                iconColor: 'bg-[#6ca2e3]'
            },
            {
              id: 'update-24',
              date: '24th May',
              content: [
                'We have commenced the formwork to the roof slab. Reinforcement works will commence next week. We hope to cast and start completing the gable walls by the following week.'
              ],
              images: [may24Img1, may24Img2, may24Img3, may24Img4, may24Img5],
              layout: 'May2',
              bgColor: 'bg-[#822e27]',
              textColor: 'text-[#fbfbfb]',
              iconColor: 'bg-[#fbfbfb]'
            },
            {
              id: 'update-14-may',
              date: '14th May',
              content: [
                'Casting of 2nd floor columns and lintels'
              ],
              images: [may14Img1, may14Img2, may14Img3, may14Img4],
              layout: 'May3',
              bgColor: 'bg-white',
              textColor: 'text-[#822e27]',
              iconColor: 'bg-[#822e27]'
            },
            {
              id: 'update-8',
              date: '8th May',
              content: [
                'Commencement of 2nd floor block work'
              ],
              images: [may8Img1, may8Img2, may8Img3],
              layout: 'May4',
              bgColor: 'bg-[#822e27]',
              textColor: 'text-[#fbfbfb]',
              iconColor: 'bg-[#fbfbfb]'
            },
            
        ]
    },
    April: {
        title: 'Development Updates',
        subtitle: 'As at April 2025',
        updates: [
            {
                id: "update-27",
                date: "27th April",
                content: [
                    '2nd floor concrete slab has been completed today. We hope to get to the roof slab level in 2weeks time starting from next week.'
                ],
                images: [april27Img1, april27Img2, april27Img3],
                layout: 'April1',
                bgColor: 'bg-white',
                textColor: 'text-[#822e27]',
                iconColor: 'bg-[#6ca2e3]'
            },
            {
              id: 'update-12',
              date: '12th April',
              content: [
                'Reinforcement placement for second floor slab.'
              ],
              images: [april12Img1, april12Img2],
              layout: 'April2',
              bgColor: 'bg-[#822e27]',
              textColor: 'text-[#fbfbfb]',
              iconColor: 'bg-[#fbfbfb]'
            },
            {
              id: 'update-11',
              date: '11th April',
              content: [
                'Form work to second floor slab.'
              ],
              images: [april11Img1, april11Img2],
              layout: 'April3',
              bgColor: 'bg-white',
              textColor: 'text-[#822e27]',
              iconColor: 'bg-[#822e27]'
            },
            
        ]
    },
  }

const monthlyUpdatesData = () => {
  return (
    <div>monthlyUpdatesData</div>
  )
}

export default monthlyUpdatesData