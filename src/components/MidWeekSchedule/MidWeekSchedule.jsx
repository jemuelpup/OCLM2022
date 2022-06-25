//import MidWeekSchedule from '.components/MidWeekSchedule/MidWeekSchedule';//cut it and paste to the component
import React, {Fragment} from 'react';
import './MidWeekSchedule.scss';
import Schedules from "../../month-schedule.json";

const MidWeekSchedule = ({
    weeklySchedule,
    color
}) => {
    let minute = 0;
    let hour = 7;

    const getMusicTitle = musicNumber => {
        const musicArray = [
            {number:"1", title:"Ang mga Katangian ni Jehova"},
            {number:"2", title:"Jehova ang Iyong Ngalan"},
            {number:"3", title:"Ikaw ang Aming Pag-asa at Lakas"},
            {number:"4", title:"“Si Jehova ang Aking Pastol”"},
            {number:"5", title:"Mga Kamangha-manghang Gawa ng Diyos"},
            {number:"6", title:"Ang Langit ay Lumuluwalhati sa Diyos"},
            {number:"7", title:"Jehova, Aming Lakas"},
            {number:"8", title:"Si Jehova ang Ating Kanlungan"},
            {number:"9", title:"Si Jehova ang Ating Hari!"},
            {number:"10", title:"Purihin si Jehova na Ating Diyos!"},
            {number:"11", title:"Mga Nilikha—Pumupuri sa Diyos"},
            {number:"12", title:"Dakilang Diyos, Jehova"},
            {number:"13", title:"Si Kristo ang Ating Huwaran"},
            {number:"14", title:"Purihin ang Bagong Hari ng Lupa"},
            {number:"15", title:"Purihin ang Panganay ni Jehova!"},
            {number:"16", title:"Purihin si Jehova Dahil sa Kaniyang Pinahiran"},
            {number:"17", title:"Handang Tumulong"},
            {number:"18", title:"Salamat sa Pantubos"},
            {number:"19", title:"Ang Hapunan ng Panginoon"},
            {number:"20", title:"Ibinigay Mo ang Iyong Mahal na Anak"},
            {number:"21", title:"Patuloy na Unahin ang Kaharian"},
            {number:"22", title:"Dumating Nawa ang Kaharian!"},
            {number:"23", title:"Nagsimula Nang Mamahala si Jehova"},
            {number:"24", title:"Halikayo sa Bundok ni Jehova!"},
            {number:"25", title:"Isang Espesyal na Pag-aari"},
            {number:"26", title:"Ito’y Ginawa Ninyo Para sa Akin"},
            {number:"27", title:"Ang Pagsisiwalat sa mga Anak ng Diyos"},
            {number:"28", title:"Maging Kaibigan ni Jehova"},
            {number:"29", title:"Pamumuhay Ayon sa Aming Pangalan"},
            {number:"30", title:"Aking Kaibigan, Diyos, at Ama"},
            {number:"31", title:"Lumakad na Kasama ng Ating Diyos"},
            {number:"32", title:"Pumanig kay Jehova!"},
            {number:"33", title:"Ihagis Mo kay Jehova ang Iyong Pasanin"},
            {number:"34", title:"Lumalakad Nang Tapat"},
            {number:"35", title:"Unahin ang mga Bagay na Mas Mahalaga"},
            {number:"36", title:"Bantayan ang Ating Puso"},
            {number:"37", title:"Buong-Kaluluwang Maglingkod kay Jehova"},
            {number:"38", title:"Tutulungan Ka Niya"},
            {number:"39", title:"Gumawa ng Mabuting Pangalan sa Diyos"},
            {number:"40", title:"Tayo Ba’y Kanino?"},
            {number:"41", title:"Pakinggan Sana ang Aking Dalangin"},
            {number:"42", title:"Ang Panalangin ng Lingkod ng Diyos"},
            {number:"43", title:"Isang Panalangin ng Pasasalamat"},
            {number:"44", title:"Panalangin ng Nanghihina"},
            {number:"45", title:"“Ang Pagbubulay-bulay ng Aking Puso”"},
            {number:"46", title:"Salamat, Jehova"},
            {number:"47", title:"Manalangin Ka kay Jehova"},
            {number:"48", title:"Lumakad Kasama ni Jehova Araw-araw"},
            {number:"49", title:"Pinasasaya ang Puso ni Jehova"},
            {number:"50", title:"Ang Aking Panalangin ng Pag-aalay"},
            {number:"51", title:"Sa Diyos Tayo’y Nakaalay!"},
            {number:"52", title:"Kristiyanong Pag-aalay"},
            {number:"53", title:"Maghanda Para Mangaral"},
            {number:"54", title:"“Ito ang Daan”"},
            {number:"55", title:"Huwag Matakot sa Kanila!"},
            {number:"56", title:"Manindigan Ka sa Katotohanan"},
            {number:"57", title:"Mangaral sa Lahat ng Uri ng Tao"},
            {number:"58", title:"Hanapin ang mga Kaibigan ng Kapayapaan"},
            {number:"59", title:"Papurihan si Jehova!"},
            {number:"60", title:"Buhay Nila ang Nakataya"},
            {number:"61", title:"Sulong, mga Saksi!"},
            {number:"62", title:"Ang Bagong Awit"},
            {number:"63", title:"Tayo’y mga Saksi ni Jehova!"},
            {number:"64", title:"May-kagalakang Nakikibahagi sa Pag-aani"},
            {number:"65", title:"Sulong Na!"},
            {number:"66", title:"Ihayag ang Mabuting Balita"},
            {number:"67", title:"Ipangaral ang Salita"},
            {number:"68", title:"Paghahasik ng Binhi ng Kaharian"},
            {number:"69", title:"Humayo at Ipangaral ang Kaharian!"},
            {number:"70", title:"Hanapin ang mga Karapat-dapat"},
            {number:"71", title:"Tayo’y Hukbo ni Jehova!"},
            {number:"72", title:"Inihahayag ang Katotohanan ng Kaharian"},
            {number:"73", title:"Bigyan Mo Kami ng Katapangan"},
            {number:"74", title:"Makiawit Tungkol sa Kaharian!"},
            {number:"75", title:"Isugo Mo Ako!"},
            {number:"76", title:"Ano’ng Nadarama Mo?"},
            {number:"77", title:"Liwanag sa Mundong Madilim"},
            {number:"78", title:"Itinuturo ang Salita ng Diyos"},
            {number:"79", title:"Turuan Mo Silang Maging Matatag"},
            {number:"80", title:"Tikman at Tingnan ang Kabutihan ni Jehova"},
            {number:"81", title:"Ang Buhay ng Payunir"},
            {number:"82", title:"Pasikatin ang Inyong Liwanag"},
            {number:"83", title:"“Sa Bahay-bahay”"},
            {number:"84", title:"Maglingkod Nang Lubos"},
            {number:"85", title:"Tanggapin ang Isa’t Isa"},
            {number:"86", title:"Dapat Tayong Maturuan"},
            {number:"87", title:"Halikayo at Guminhawa!"},
            {number:"88", title:"Ipaalam Mo sa Akin ang Iyong mga Daan"},
            {number:"89", title:"Makinig at Sumunod Upang Pagpalain Ka"},
            {number:"90", title:"Patibayin ang Isa’t Isa"},
            {number:"91", title:"Aming Pagpapagal Dahil sa Pag-ibig"},
            {number:"92", title:"Isang Dakong Nagtataglay ng Pangalan Mo"},
            {number:"93", title:"Pagpalain ang Aming Pagpupulong"},
            {number:"94", title:"Salamat sa Salita ng Diyos"},
            {number:"95", title:"Ang Liwanag ay Lalong Nagniningning"},
            {number:"96", title:"Ang Aklat ng Diyos—Isang Kayamanan"},
            {number:"97", title:"Kailangan ang Salita ng Diyos Para Mabuhay"},
            {number:"98", title:"Ang Kasulatan—Nagmula sa Diyos"},
            {number:"99", title:"Ang Ating Buong Kapatiran"},
            {number:"100", title:"Maging Mapagpatuloy"},
            {number:"101", title:"Naglilingkod Nang May Pagkakaisa"},
            {number:"102", title:"Tulungan ang Mahihina"},
            {number:"103", title:"Mga Pastol—Regalo ng Diyos"},
            {number:"104", title:"Tulong ng Banal na Espiritu ng Diyos"},
            {number:"105", title:"Si Jehova ay Pag-ibig"},
            {number:"106", title:"Mahalaga ang Pag-ibig"},
            {number:"107", title:"Tularan ang Pag-ibig ni Jehova"},
            {number:"108", title:"Ang Tapat na Pag-ibig ng Diyos"},
            {number:"109", title:"Umibig Nang Masidhi Mula sa Puso"},
            {number:"110", title:"Ang Kagalakang Galing kay Jehova"},
            {number:"111", title:"Mga Dahilan ng Ating Kagalakan"},
            {number:"112", title:"Si Jehova, Diyos ng Kapayapaan"},
            {number:"113", title:"Ang Taglay Nating Kapayapaan"},
            {number:"114", title:"“Maging Matiisin”"},
            {number:"115", title:"Salamat sa Pagtitiis ng Diyos"},
            {number:"116", title:"Nakagiginhawa ang Kabaitan"},
            {number:"117", title:"Magpakita ng Kabutihan"},
            {number:"118", title:"Palakasin Mo ang Aming Pananampalataya"},
            {number:"119", title:"Dapat Magkaroon ng Pananampalataya"},
            {number:"120", title:"Tularan ang Kahinahunan ni Kristo"},
            {number:"121", title:"Kailangan ang Pagpipigil sa Sarili"},
            {number:"122", title:"Magpakatatag!"},
            {number:"123", title:"Magpasakop sa Teokratikong Kaayusan"},
            {number:"124", title:"Ipakita ang Katapatan"},
            {number:"125", title:"“Maligaya ang mga Maawain”"},
            {number:"126", title:"Manatiling Gisíng at Magpakatibay"},
            {number:"127", title:"Ang Uri ng Pagkatao na Dapat Kong Taglayin"},
            {number:"128", title:"Magtiis Hanggang sa Wakas"},
            {number:"129", title:"Hindi Tayo Susuko"},
            {number:"130", title:"Maging Mapagpatawad"},
            {number:"131", title:"Ang Pinagsama ng Diyos"},
            {number:"132", title:"Tayo’y Isa Na"},
            {number:"133", title:"Sambahin si Jehova Habang Nasa Kabataan"},
            {number:"134", title:"Mga Anak—Ipinagkatiwala ng Diyos"},
            {number:"135", title:"“Magpakarunong Ka, Anak Ko”"},
            {number:"136", title:"Malaking Gantimpala Mula kay Jehova"},
            {number:"137", title:"Mga Babaeng Tapat"},
            {number:"138", title:"Kagandahan ng Puting Buhok"},
            {number:"139", title:"Kapag Naging Bago ang Lahat ng Bagay"},
            {number:"140", title:"Buhay na Walang Hanggan—Sa Wakas!"},
            {number:"141", title:"Ang Regalong Buhay"},
            {number:"142", title:"Manalig sa Ating Pag-asa"},
            {number:"143", title:"Patuloy na Magbantay at Maghintay"},
            {number:"144", title:"Masdan Mo ang Gantimpala!"},
            {number:"145", title:"Ang Paraisong Pangako ng Diyos"},
            {number:"146", title:"Lahat ng Bagay ay Ginagawang Bago"},
            {number:"147", title:"Buhay na Walang Hanggan—Isang Pangako"},
            {number:"148", title:"Laan ni Jehova ang Kaligtasan"},
            {number:"149", title:"Isang Awit ng Tagumpay"},
            {number:"150", title:"Hanapin ang Diyos Para Maligtas"},
            {number:"151", title:"Tatawag Siya"}
        ];
        if(isNaN(musicNumber)) return "";
        const music = musicArray.find(m => m.number == musicNumber);
        return music ? music.title : "";
    }


    const getTitle = (titleCode) => {
        switch(titleCode){
            case 0: return "Pagbabasa ng Bibliya";
            case 1: return "Unang Pag-uusap";
            case 2: return "Pagdalaw-Muli";
            case 3: return "Pag-aaral sa Bibliya";
            case 4: return "Pahayag";
            case 5: return "Maging Mas Masaya sa Ministeryo";
            case 10: return "Pag-iimbita sa Memoryal";
        }
    }

    const getBibleReadingRow = () => {
        const m = minute;
        minute += weeklySchedule.bibleReading[0].time + 1
        return <div className="section-row">
            <div className="w50p section-row time-col-container">
                <div className="time-col">
                    <p>{m>60 ? hour + 1 : hour}:{m%60 > 10 ? m%60 : "0" + m%60}</p>
                </div>
                <div className="section-col w100p">
                    <p className="with-pointer">Pagbabasa ng Bibliya (4 min)</p>
                </div>
            </div>
            <div className="section-col w25p">
                <p>
                    {/* {weeklySchedule.bibleReading[1].name} */}
                </p>
            </div>
            <div className="section-col w25p">
                <p>{weeklySchedule.bibleReading[0].name}</p>
            </div>
        </div>
    }
    const getFirstMusic = (music,prayer) => {
        const m = minute;
        minute += 6;
        return <Fragment>
            <div className="section-row">
                <div className="w50p section-row time-col-container">
                    <div className="time-col">
                        <p>{m>60 ? hour + 1 : hour}:{m%60 > 10 ? m%60 : "0" + m%60}</p>
                    </div>
                    <div className="section-col w50p">
                        {console.log(getMusicTitle(weeklySchedule.music[0].split(" ")[1]))}
                        <p className="with-pointer">{weeklySchedule.music[0]} - {getMusicTitle(weeklySchedule.music[0].split(" ")[1])}</p>
                    </div>
                </div>
                <div className="section-col w25p tr">
                    <p className="label">Panalangin:</p>
                </div>
                <div className="section-col w25p">
                    <p>{weeklySchedule.startingPrayer}</p>
                </div>
            </div>
            <div className="section-row">
                <div className="w75p section-row time-col-container">
                    <div className="time-col">
                        <p>{m>60 ? hour + 1 : hour}:05</p>
                    </div>
                    <div className="section-col w50p">
                        <p className="with-pointer">Pambungad na Komento (1 min)</p>
                    </div>
                </div>
                <div className="section-col w25p">
                    <p>{weeklySchedule.chairman}</p>
                </div>
            </div>
        </Fragment>
    }

    const getLastMusic = () => {
        const m = minute;
        return <Fragment>
            <div className="section-row">
                <div className="w50p section-row time-col-container">
                    <div className="time-col">
                        <p>{m>60 ? hour + 1 : hour}:{m%60 > 10 ? m%60 : "0" + m%60}</p>
                    </div>
                    <div className="section-col w50p">
                        
                        <p className="with-pointer">{
                            getMusicTitle(weeklySchedule.music[2].split(" ")[1]).length ? 
                            `${weeklySchedule.music[2]} - ${getMusicTitle(weeklySchedule.music[2].split(" ")[1])}` : 
                            weeklySchedule.music[2]
                        }</p>
                    </div>
                </div>
                <div className="section-col w25p tr">
                    <p className="label">Panalangin:</p>
                </div>
                <div className="section-col w25p">
                    <p>{weeklySchedule.endingPrayer}</p>
                </div>
            </div>
        </Fragment>
    }

    const getSecondMusic = (music) => {
        minute = 47;
        const m = minute;
        minute += 5;
        
        return <div className="section-row">
            <div className="w100p section-row time-col-container">
                <div className="time-col">
                    <p>{m>60 ? hour + 1 : hour}:{m%60 > 10 ? m%60 : "0" + m%60}</p>
                </div>
                <div className="section-col w100p">
                    <p className="with-pointer">{weeklySchedule.music[1]} - {getMusicTitle(weeklySchedule.music[1].split(" ")[1])}</p>
                </div>
            </div>
        </div>
    }

    const getCBSRow = () => {
        const m = minute;
        minute += 30;
        return <div className="section-row">
            <div className="w50p section-row time-col-container">
                <div className="time-col">
                    <p>{m>60 ? hour + 1 : hour}:{m%60 > 10 ? m%60 : "0" + m%60}</p>
                </div>
                <div className="section-col w50p">
                    <p className="with-pointer">Pag-aaral ng Kongregasyon sa Bibliya  (30 min)</p>
                </div>
            </div>
            <div className="section-col w50p">
                <div className="section-row w100p">
                    <div className="section-col w50p tr">
                        <p className="label">Conductor / Reader:</p>
                    </div>
                    <div className="section-col w50p">
                        <p>{weeklySchedule.cbsConductor} / <br/>{weeklySchedule.cbsReader}</p>
                    </div>
                </div>
            </div>
        </div>
    }

    const getChairmanLastComment = () => {
        const m = minute;
        minute += 3;
        return <div className="section-row">
            <div className="w75p section-row time-col-container">
                <div className="time-col">
                    <p>{m>60 ? hour + 1 : hour}:{m%60 > 10 ? m%60 : "0" + m%60}</p>
                </div>
                <div className="section-col w75p">
                    <p className="with-pointer">Panghuling Komento (3 min)</p>
                </div>
            </div>
            <div className="section-col w25p">
                <p>{weeklySchedule.chairman}</p>
            </div>
        </div>
    }

    return <div className='MidWeekScheduleContainer'>
        <div className="intro-section">
            <div className="section-row">
                <div className="section-col w50p" style={{
                    backgroundColor: color,
                    borderLeft: 0,
                    borderTop: 0,
                }}>
                    <div className="date-and-bible-reading">
                        <p>{weeklySchedule.date} | {weeklySchedule.weeklyBibleReadingSchedule}</p>
                    </div>
                </div>
                <div className="section-col w50p">
                    <div className="section-row w100p">
                        <div className="section-col w50p tr">
                            <p className="label">Chairman:</p>
                        </div>
                        <div className="section-col w50p">
                            <p>{weeklySchedule.chairman}</p>
                        </div>
                    </div>
                    <div className="section-row w100p">
                        <div className="section-col w50p tr">
                            <p className="label" style={{letterSpacing:"-0.1px"}}>Tagapayo sa Karagdagang Klase:</p>
                        </div>
                        <div className="section-col w50p">
                            {/* <p>{weeklySchedule.secondHallCouncilor}</p> */}
                        </div>
                    </div>
                </div>
            </div>
            {getFirstMusic(weeklySchedule.music[0])}
        </div>
        <div className="first-section">
            <div className="section-row">
                <div className="section-col w50p subtitle-heading">
                    <p>Kayamanan Mula sa Salita ng Diyos</p>
                </div>
                <div className="section-col w25p">
                    <p className="label w100p cell-header">Karagdagang Klase</p>
                </div>
                <div className="section-col w25p">
                    <p className="label w100p cell-header">Main Hall</p>
                </div>
            </div>
            {weeklySchedule.treasuresFromGodsWord ? weeklySchedule.treasuresFromGodsWord.map((treasure,i)=>{
                const m = minute;
                minute += treasure.time;
                return <div key={i} className="section-row">
                    <div className="w75p section-row time-col-container">
                        <div className="time-col">
                            <p>{m>60 ? hour + 1 : hour}:{m%60 > 10 ? m%60 : "0" + m%60}</p>
                        </div>
                        <div className="section-col">
                            <p className="with-pointer">{treasure.title}  ({treasure.time} min)</p>
                        </div>
                    </div>
                    <div className="section-col w25p">
                        <p>{treasure.assignee}</p>
                    </div>
                </div>
            }) : ""}
            {getBibleReadingRow()}
        </div>
        <div className="second-section">
            <div className="section-row">
                <div className="section-col w50p subtitle-heading">
                    <p>Maging Mahusay sa Ministeryo</p>
                </div>
                <div className="section-col w25p">
                    <p className="label w100p cell-header">Karagdagang Klase AUD {weeklySchedule.secondHallAudience}</p>
                </div>
                <div className="section-col w25p">
                    <p className="label w100p cell-header">Main Hall</p>
                </div>
            </div>
            {weeklySchedule.publishersPart ? weeklySchedule.publishersPart.map((assignment,i,{length}) => {
                const m = minute;
                minute += assignment[0].time + ((length-1 === i) ? 2 : assignment[0].isVideo ? 0 : 1);
                return <div className="section-row" key={i}>
                    <div className="w50p section-row time-col-container">
                        <div className="time-col">
                            <p>{m>60 ? hour + 1 : hour}:{m%60 > 10 ? m%60 : "0" + m%60}</p>
                        </div>
                        <div className="section-col w50p">
                            <p className="with-pointer">{assignment[0].isVideo ? "Video ng " : ""}{getTitle(assignment[0].assignment)} ({assignment[0].time} min){assignment[0].isVideo ? " Pagtalakay." : ""}</p>
                        </div>
                    </div>
                    <div className="section-col w25p">
                        {/* {assignment[0].isVideo ? "" : */}
                            <p className="partner-assignee">
                                <span className="assignee-name">
                                    {/* {assignment[1].name} */}
                                    </span>
                                {assignment[1].assistant.length ? <Fragment>
                                    <span className="assignee-name slash">
                                        {/* / */}
                                    </span>
                                    <span className="assignee-name">
                                        {/* {assignment[1].assistant} */}
                                    </span>
                                </Fragment> : ""}
                            </p>
                        {/* } */}
                    </div>
                    <div className="section-col w25p partner-assignee">
                        <p className="partner-assignee">
                            <span className="assignee-name">{assignment[0].name}</span>
                            {assignment[0].assistant.length ? <Fragment>
                                <span className="assignee-name slash">/</span>
                                <span className="assignee-name">{assignment[0].assistant}</span>
                            </Fragment> : ""}
                        </p>
                        {/* <p>{assignment[0].name}{`${assignment[0].assistant.length ? " / "+assignment[0].assistant:"" }` }</p> */}
                    </div>
                </div>
            }) : ""}
        </div>
        <div className="third-section">
            <div className="section-row">
                <div className="section-col w50p subtitle-heading">
                    <p>Pamumuhay Bilang Kristiyano</p>
                </div>
                <div className="section-col w50p"></div>
            </div>
            {getSecondMusic(weeklySchedule.music[1])}
            {weeklySchedule.livingAsChristians.map(livingAsChristiansTopic => {
                const m = minute;
                minute += livingAsChristiansTopic.time;
                return <div className="section-row">
                    <div className="w75p section-row time-col-container">
                        <div className="time-col">
                            <p>{m>60 ? hour + 1 : hour}:{m%60 > 10 ? m%60 : "0" + m%60}</p>
                        </div>
                        <div className="section-col">
                            <p className="with-pointer">{livingAsChristiansTopic.title}  ({livingAsChristiansTopic.time} min)</p>
                        </div>
                    </div>
                    <div className="section-col w25p">
                        <p>{livingAsChristiansTopic.assignee}</p>
                    </div>
                </div>
            })}
            {getCBSRow()}
            {getChairmanLastComment()}
            {getLastMusic()}
        </div>
    </div>
}

export default MidWeekSchedule;