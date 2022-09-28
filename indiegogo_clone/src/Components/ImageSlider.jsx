import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./ImageSlider.module.css"

const ImageSlider = () => {


    const [img, setImg] = useState(0);
	useEffect(() => {
		const x = setInterval(() => {
			setImg(img === imgData.length - 1 ? 0 : img + 1);
		}, 3000);
		return () => clearInterval(x);
	}, [img]);

	const navigate = useNavigate();
	


    const imgData = [
        "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664294818/cs88q6rbzlobos2prwyf.jpg",
        "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664298780/rik4figygisjo2nzoqq3.jpg",
        "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1663866576/rcmaygmarbmseoccwmt1.jpg",
        "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664295391/tx8bsjtd4rtk3rwx9uiw.jpg",
        "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664295495/wxv8xstvbju5gkjjplbs.jpg",
        "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664314845/ps3luk3boc8wvnxfatjq.jpg"
    ];
    const title = ["GOGOPICKS", "GOGOPICKS", "GOGOPICKS","FEATURED", "FEATURED", "FEATURED" ];
    const subtitle = [
        "Just Launched! GREAT JOY T2.935mm 1.8x Anomorphic Lense",
        "Just Launched! IMMOTOR BAY Series Portable Power Station",
        "GRYPHON GE",
        "Coming Soon! Buxus Eva",
        "Coming Soon! Rymic E-Bike",
        "Coming Soon! The World's First Portable Ice Cream Maker"
    ];
    const description = [
        "New Budget Anomorphic King 1.8x Anomorphic Lense Set with Stunning Performance",
        "542.9Wh & 1023Wh|PD 100W|Lightweght|Solar Panel Charging |AC & DC| Smart App",
        "Meta Safe Blockchain & WiFi Router",
        "Am E-bike with a motarcycle Spirit",
        "Designed Specifically For Commuters",
        "Wireless & Portable } Colling System | Handy Operation  | 2-in-1 Freezer Bowl |Easy To Clean"
    ];


  return (
    <div className={styles.maincomp}>
			<img height="100%" src={imgData[img]} alt="blank" className={styles.slide} />
			<p className={styles.title}> {title[img]}</p>
			<p className={styles.subtitle}>{subtitle[img]}</p>
			<p className={styles.description}>{description[img]}</p>
			<h1 className={styles.count}>{img+1}/6</h1>
			
		</div>
  )
}

export default ImageSlider