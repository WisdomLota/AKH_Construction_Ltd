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
import devConstruction15 from '../assets/devConstruction15.png';
import devConstruction16 from '../assets/devConstruction16.png';
import devConstruction17 from '../assets/devConstruction17.png';
import August28Img1 from "../assets/August28Img1.png";
import August28Img2 from "../assets/August28Img2.png";
import August20Img1 from "../assets/August20Img1.png";
import August20Img2 from "../assets/August20Img2.png";
import August20Img3 from "../assets/August20Img3.png";
import August19Img1 from "../assets/August19Img1.png";
import August19Img2 from "../assets/August19Img2.png";
import August16Img1 from "../assets/August16Img1.png";
import August16Img2 from "../assets/August16Img2.png";
import August16Img3 from "../assets/August16Img3.png";
import August9Img1 from "../assets/August9Img1.png";
import August9Img2 from "../assets/August9Img2.png";
import August9Img3 from "../assets/August9Img3.png";
import August9Img4 from "../assets/August9Img4.png";
import August1Img1 from "../assets/August1Img1.png";
import August1Img2 from "../assets/August1Img2.png";
import August1Img3 from "../assets/August1Img3.png";
import August1Img4 from "../assets/August1Img4.png";
import July24Img1 from "../assets/July24Img1.png";
import July24Img2 from "../assets/July24Img2.png";
import July24Img3 from "../assets/July24Img3.png";
import July18Img1 from "../assets/July18Img1.png";
import July18Img2 from "../assets/July18Img2.png";
import July18Img3 from "../assets/July18Img3.png";
import July18Img4 from "../assets/July18Img4.png";
import July18Img5 from "../assets/July18Img5.png";
import July11Img1 from "../assets/July11Img1.png";
import July11Img2 from "../assets/July11Img2.png";
import July11Img3 from "../assets/July11Img3.png";
import July11Img4 from "../assets/July11Img4.png";
import July5Img1 from "../assets/July5Img1.png";
import July5Img2 from "../assets/July5Img2.png";
import July5Img3 from "../assets/July5Img3.png";
import July5Img4 from "../assets/July5Img4.png";
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
import april11Img2 from "../assets/april11_2nd.png";
import april11Img3 from "../assets/april11_3rd.png";

export const monthConfiguration = {
    August: {
        title: 'Development Updates',
        subtitle: 'As at August 2025',
        updates: [
            {
              id: 'update-28',
              date: '28th August',
              content: [
                'We have commenced the installation of the roof trusses for house 1 and gate house. Installation of the roofing sheets is still ongoing for all houses.',
                'Casting of gate pillars and installation of gate rails will commence this week.',
                'Internal plastering for the units are ongoing. Aluminium window subframes will be delivered on Friday and installed. We will also commence the installation of the window sills.'
              ],
              images: [August28Img1, August28Img2],
              layout: 'August1',
              bgColor: 'bg-[#822e27]',
              textColor: 'text-[#fbfbfb]',
              iconColor: 'bg-[#fbfbfb]'
            },
            {
                id: "update-20",
                date: "20th August",
                content: [
                    'We will remove the formwork for house 1 and commence the installation of the roof trusses this week. Installation of the roofing sheets is currently ongoing for houses 2-5 which will be completed this week.',
                    'Formwork to gate house concrete facia will commence this week. Casting of gate pillars and installation of gate rails will be done next week.',
                    'Internal plastering for ground floor and first floor for the units are ongoing. Aluminium window subframes will be delivered this week and installed. We will also commence the installation of the window sills.'
                ],
                images: [August20Img1, August20Img2, August20Img3],
                layout: 'August2',
                bgColor: 'bg-[#fbfbfb]',
                textColor: 'text-[#822e27]',
                iconColor: 'bg-[#6ca2e3]'
            },
            {
              id: 'update-19',
              date: '19th August',
              content: [
                'Roofing ongoing.........',
              ],
              images: [August19Img1, August19Img2],
              layout: 'August3',
              bgColor: 'bg-[#822e27]',
              textColor: 'text-[#fbfbfb]',
              iconColor: 'bg-[#fbfbfb]'
            },
            {
              id: 'update-16',
              date: '16th August',
              content: [
                'Casting of house 1 concrete facia was completed on Wednesday. Installation of roof trusses will commence next week. Installation of roof trusses for houses 2-5 is complete ready for roofing sheets. Installation of roofing sheets will commence next week.',
                'Internal plastering for ground floor and first floor for the units is at advanced stage.'
              ],
              images: [August16Img1, August16Img2, August16Img3],
              layout: 'August4',
              bgColor: 'bg-[#fbfbfb]',
              textColor: 'text-[#822e27]',
              iconColor: 'bg-[#822e27]'
            },
            {
              id: 'update-9',
              date: '9th August',
              content: [
                'Steel Roof trusses to houses 4&5 has been completed, houses 2&3 will be completed by Monday/Tuesday. Formwork to concrete facia to house 5 is completed, reinforcement is being installed, will be completed by Monday. Roofing sheets are under production will be on site by Wednesday next week.',
                'Internal plaster work on the ground floor and first floor are ongoing with 3 flats largely completed.',
                'Casting of the roof deck to the water treatment house was completed Today. Formwork to gate house concrete facia will commence next week.'
              ],
              images: [August9Img1, August9Img2, August9Img3, August9Img4],
              layout: 'August5',
              bgColor: 'bg-[#822e27]',  
              textColor: 'text-[#fbfbfb]',
              iconColor: 'bg-[#fbfbfb]'
            },
            {
              id: 'update-1',
              date: '1st August',
              content: [
                'Steel Roof trusses to houses 4&5 will be completed by 2row. Concrete facia to houses 2&3 has been cast, formwork will be removed on Monday and steel trusses work will commence on Tuesday/Wednesday. Roofing will commence next week.',
                'Casting of the roof deck to the water treatment house will be completed by Monday/Tuesday next week. Formwork to house 5 concrete facia and the gate house concrete facia will commence next week as well.',
              ],
              images: [August1Img1, August1Img2, August1Img3, August1Img4],
              layout: 'August6',
              bgColor: 'bg-[#fbfbfb]',
              textColor: 'text-[#822e27]',
              iconColor: 'bg-[#822e27]'
            },
        ]
    },
    July: {
        title: 'Development Updates',
        subtitle: 'As at July 2025',
        updates: [
            {
              id: 'update-24',
              date: '24th July',
              content: [
                'Form work to house 2&3 has commenced and will be completed by Friday. Steel roof trusses to house 4&5 has commenced and will be completed by Friday. Roofing proper should commence by next week',
                'Water treatment house block work being completed to roof level'
              ],
              images: [July24Img1, July24Img2, July24Img3],
              layout: 'July1',
              bgColor: 'bg-[#822e27]',
              textColor: 'text-[#fbfbfb]',
              iconColor: 'bg-[#fbfbfb]'
            },
            {
                id: "update-18",
                date: "18th July",
                content: [
                    'Casting of concrete facia to houses 5&4 completed. Gate house block work completed including gable walls, only concrete facia is outstanding. Water treatment house at lintel level will be cast tomorrow.',
                    'Form work to house 3&4 will commence next week as well as steel roof trusses to house 4&5.',
                    'Construction of our access road has commenced so by the time we are done we hope the road will be ready as well.'
                ],
                images: [July18Img1, July18Img2, July18Img3, July18Img4, July18Img5],
                layout: 'July2',
                bgColor: 'bg-[#fbfbfb]',
                textColor: 'text-[#822e27]',
                iconColor: 'bg-[#6ca2e3]'
            },
            {
              id: 'update-11',
              date: '11th July',
              content: [
                'Concrete facia formwork for houses 4&5 complete. Reinforcements being put in place, will be completed by Monday. Casting of the concrete facia will be done next week.',
                'All internal electrical/mechanical fix piping has been completed ready for plastering.',
                'Gate house and water treatment house block work at lintel level. Formwork and reinforcement installation are ongoing. Will be completed by tomorrow.'
              ],
              images: [July11Img1, July11Img2, July11Img3, July11Img4],
              layout: 'July3',
              bgColor: 'bg-[#822e27]',
              textColor: 'text-[#fbfbfb]',
              iconColor: 'bg-[#fbfbfb]'
            },
            {
              id: 'update-5',
              date: '5th July',
              content: [
                'Gable walls completed. Commenced formwork to the concrete facia this week to be completed by next week. Reinforcement work will commence by Monday, we hope to start casting by the end of the week.',
                'Steel roof trusses are already on site and roofing sheets are ready. Still working on the electrical/mechanical first fix piping, almost complete. Plastering should commence very soon.'
              ],
              images: [July5Img1, July5Img2, July5Img3, July5Img4],
              layout: 'July4',
              bgColor: 'bg-[#fbfbfb]',
              textColor: 'text-[#822e27]',
              iconColor: 'bg-[#822e27]'
            },
        ]
    },
    June: {
        title: 'Development Updates',
        subtitle: 'As at June 2025',
        updates: [
            {
              id: 'update-25',
              date: '25th June',
              content: [
                'Construction of gable walls are ongoing. Steel trusses are already on site, will be installed after the construction of the concrete facia. Roofing sheets has been paid for.',
                'Block work to gate house are ongoing, preparations for plastering in top gear ⚙ with materials being delivered.'
              ],
              images: [devConstruction15, devConstruction16, devConstruction17],
              layout: 'June1',
              bgColor: 'bg-[#822e27]',
              textColor: 'text-[#fbfbfb]',
              iconColor: 'bg-[#fbfbfb]'
            },
            {
                id: "update-21",
                date: "21st June",
                content: [
                    'We are casting the roof slab now with treated concrete. Casting of the roof slab and capping the retainwall beams will be completed tomorrow.',
                    'We will commence the gable walls from next week.',
                    'Electrical piping has been completed, mechanical piping still ongoing almost completed. Gate house/fence and water treatment room at 50% level.'
                ],
                images: [devConstruction1, devConstruction2, devConstruction3, devConstruction4, devConstruction5],
                layout: 'June2',
                bgColor: 'bg-[#fbfbfb]',
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
              layout: 'June3',
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
              layout: 'June4',
              bgColor: 'bg-[#fbfbfb]',
              textColor: 'text-[#822e27]',
              iconColor: 'bg-[#822e27]'
            },
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
                bgColor: 'bg-[#fbfbfb]',
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
              bgColor: 'bg-[#fbfbfb]',
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
                bgColor: 'bg-[#fbfbfb]',
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
              images: [april11Img1, april11Img2, april11Img3],
              layout: 'April3',
              bgColor: 'bg-[#fbfbfb]',
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