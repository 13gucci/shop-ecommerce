import React from 'react';
import ChatBox from 'src/components/ChatBox';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header/Header';

type Props = {
    children?: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
    return (
        <>
            <Header />
            {children}
            <ChatBox />
            <Footer />
        </>
    );
}
