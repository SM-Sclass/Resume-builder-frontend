// import { BsGlobe } from 'react-icons/bs';
import { ProfileContact } from '../atoms/ProfileContact';
// import { ProfileImage } from '../../components/ProfileImage';
import '../../../App.css'
import { ProfileName} from '../atoms/ProfileName';
import { SectionSubtitle } from '../atoms/SectionSubtitle';

export const BasicIntro = ({
  name,
  label,
  url,
  email,
  phone,
  city,
  image,
}) => {
  return (
    <div className="BasicIntroLayout">
      <div>
        <ProfileName name={name} />
        <SectionSubtitle label={label} />
        <div className="IntroContact">
          <ProfileContact text={phone} />
          <ProfileContact text={email} />
          <ProfileContact text={city} />
          {url && (
            <div className="flex gap-2 ml-2 items-center">
              {/* <BsGlobe /> */}
              <ProfileContact text={url} />
            </div>
          )}
        </div>
      </div>
      {/* <ProfileImage src={image} height="100px" width="100px" /> */}
    </div>
  );
};
