import React from 'react';
import AuthenticationHeader from 'src/components/AuthenticationHeader';
import Footer from 'src/components/Footer';

type Props = {
    children?: React.ReactNode;
};

export default function AuthenticationLayout({ children }: Props) {
    return (
        <React.Fragment>
            <AuthenticationHeader />
            {children}
            <div className='h-[1000px]'></div>
            <Footer />
        </React.Fragment>
    );
}
