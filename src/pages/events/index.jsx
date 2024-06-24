import './index.css'
import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import Navbar from '../../components/alt_navbar';
import axios from 'axios';
import ImageSlider from '../../components/imageSlider';
import Loader from '../../components/loader';

export default function AboutPage(){
  const [isLoading, setIsLoading] = useState(false)
  const [sheetData, setSheetData] = useState([]);
  const [selectedContent, setSelectedContent] = useState([])
  const [show, setIsShow] = useState(false)
  const [contentName, setContentName] = useState("")
  const [contentMediaType, setContentMediaType] = useState("")

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.reveal', {
      duration: 1000,
    });
  }, []);

  const showModal = () => {
    setIsShow(true);
  };

  const hideModal = () => {
    setIsShow(false);
  };

  const setContentDetails = (info) => {
    setContentMediaType(info.media_type)
    setContentName(info.title)
    setSelectedContent(info.images.split(","))
    showModal()
  }

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      const sheetId = '1N6E4SXmY38agoGfr23YDg98wZlB2U_Z4d8xDevQlPM8';
      const apiKey = process.env.REACT_APP_MASTER_KEY;
      const range = 'Sheet3';
      
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
        );

        const data = response.data.values
        const headers = data[0];

        const items = data.slice(1).map(row => {
          return headers.reduce((acc, header, index) => {
            acc[header] = row[index];
            return acc;
          }, {});
        });

        setSheetData(items);
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
    <Navbar useRed={true}/>
    {
      isLoading ? <Loader/>:
      <div class="timeline mt-24">
        {sheetData.map((item, index) => {
          return <div className={`event-container ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div class="date">{item.date}</div>
            <i class="icon fa fa-home"></i>
            <div class="content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button onClick={() => setContentDetails(item)} className='content-view-button'>View Content</button>
            </div>
          </div>
        })}
      </div>
    }
    
    <ImageSlider show={show} handleClose={hideModal} name={contentName} images={selectedContent} media_type={contentMediaType}/>
    </>
  )
}