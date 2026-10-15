
import { Carousel } from 'antd';
import car1 from '../assets/car1.png';
import car2 from '../assets/car2.png';
import car3 from '../assets/car3.png';
import car4 from '../assets/car4.png';
const contentStyle = {
  margin: 0,
  height: '400px',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const carousal = () => (
  <Carousel autoplay>
    <div className="w-full">
      <div className="w-full h-full flex items-center justify-center">
        <img style={contentStyle} src={car1} alt=" Carousel 1" />
      </div>
    </div>
    <div className="w-full">
      <div className="w-full h-full flex items-center justify-center">
        <img style={contentStyle} src={car2} alt=" Carousel 2" />
      </div>
    </div>
    <div className="w-full">
      <div className="w-full h-full flex items-center justify-center">
        <img style={contentStyle} src={car3} alt=" Carousel 3" />
      </div>
    </div>
    <div className="w-full">
      <div className="w-full h-full flex items-center justify-center">
        <img style={contentStyle} src={car4} alt=" Carousel 4" />
      </div>
    </div>
  </Carousel>
);
export default carousal;