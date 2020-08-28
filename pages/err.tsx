import sectionLayoutStyles from '../styles/Layout.module.css';
import errorStyles from '../styles/Error.module.css';
import Footer from '../src/components/Footer';
import { useRouter } from 'next/router';

const ErrorPage: React.FC = (props) => {
  const router = useRouter()
  return <div>
        <div className={sectionLayoutStyles.section_layout}>
            <div className={errorStyles.error_state}>{router.query.err}
            <p>Please try again later!! :(</p></div>
            
        </div>
        <div className={sectionLayoutStyles.footer_layout}>
            <Footer/>
        </div>
  </div>
};

export default ErrorPage;