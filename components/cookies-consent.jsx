import { useState } from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { Text, Link } from '@chakra-ui/react';

const CookiesConsent = () => {
    const [consent, setConsent] = useState(Cookies.get('UserConsent'));

    return (
        !consent && (
            <CookieConsent
                style={{ background: 'white', opacity: 1, width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
                buttonStyle={{ color: 'white', background: '#7F3488' }}
                cookieName="UserConsent"
                buttonText="ยืนยัน"
                onAccept={() => {
                    setConsent(true);
                }}
                expires={7}
            >
                <Text
                    fontSize={{ base: '1rem', sm: '0.75rem', md: '0.875rem', lg: '1rem' }}
                    lineHeight={{ base: '1.5rem', sm: '1rem', md: '1.25rem', lg: '1.5rem' }}
                    fontWeight={'light'}
                    color={'black'}>
                    เว็บไซต์นี้ใช้คุกกี้เพื่อวัตถุประสงค์ในการปรับปรุงประสบการณ์ของผู้ใช้ให้ดียิ่งขึ้น ท่านสามารถศึกษารายละเอียดเพิ่มเติมได้ใน{' '}
                    <Link style={{ color: 'black', textDecoration: 'underline' }} fontWeight={'normal'} href={'/documents/consent นโยบายคุกกี้ PEA Solar Hero - Rev.2.pdf'}>นโยบายคุกกี้</Link>
                    {' '}และ{' '}
                    <Link style={{ color: 'black', textDecoration: 'underline' }} fontWeight={'normal'} href={'/documents/ประกาศนโยบายและแนวปฏิบัติฯ 2563.pdf'}>นโยบายการคุ้มครองข้อมูลส่วนบุคคล</Link>
                </Text>
            </CookieConsent>
        )
    );
};

export default CookiesConsent;