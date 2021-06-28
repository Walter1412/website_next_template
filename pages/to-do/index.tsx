// React
import { useReducer,useContext } from 'react';

// Next.js
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
// Next-i18n
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Other
import { Button } from '../../components/basic/Form';
import { i18nContext } from '../../lib/state/i18n';


const initialState = { count: 0 };
function reducer(state: any, action: any) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function ToDo() {
  const router = useRouter();
  const { t, i18n } = useTranslation(['common']);
  const { index, setCurrentIndex } = useContext(i18nContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="default-wrapper">
      <div className="default-container">
        <div className="w-full flex">
          <div>{t('h1')}</div>
          <div>{index}</div>
          <div>{state.count}</div>

          <Button onClick={() => setCurrentIndex('1231231321')}>test</Button>
          <Button
            onClick={() => {
              router.push(router.pathname,)
            }}
          >
            test
          </Button>
          <Link href={router.pathname} locale="tw" replace>
            TW
          </Link>
          <Link href={router.pathname} locale="en">
            EN
          </Link>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? '', ['common'])),
    },
  };
};
