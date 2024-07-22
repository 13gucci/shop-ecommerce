import React from 'react';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header/Header';

type Props = {
    children?: React.ReactNode;
};

export default function AuthenticationLayout({ children }: Props) {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    );
}
