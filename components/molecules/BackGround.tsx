import { getWindowSize } from '../../hooks/GetWindowSize';

const BackGround = ({ children, opacity }: any) => {
  const Bg_img_pc = '../img/bg_img-pc.jpg';
  const Bg_img_sp = '../img/bg_img-sp.jpg';
  const { width } = getWindowSize();

  return (
    <>
      <div className="full_bg">
        <div className="color_filter">
          <div className="white"></div>
        </div>
        <div className="black">{children}</div>
      </div>
      <style jsx>{`
        .full_bg {
          background-image: url('./img/bg_img-pc.jpg');
          background-repeat: repeat-y !important;
          background-size: 100% !important;
          background-position: 50% 0% !important;
          overflow: hidden;
          position: relative;
          @media screen and (max-width: 576px) {
            background-image: url('./img/bg_img-sp.jpg');
            background-size: 150% !important;
          }
        }
        .color_filter {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          mix-blend-mode: color;
        }
        .black {
          background-color: rgb(0, 0, 0, ${opacity});
        }
        .white {
          width: 100%;
          height: 100%;
          background: #fff;
        }
      `}</style>
    </>
  );
};

export default BackGround;
