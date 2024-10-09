'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  BannerCtn,
  Edges,
  Edge,
  Title,
  BriefNote,
  BriefNoteCont,
  BriefNoteCoverImg,
  InnerTwo,
  AddedEdge,
  AddedEdges,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import RevealCover from '@/components/Common/RevealCover';
import { Div } from '../Featured/styles';
import { imageVariants } from '../Featured';
import { useIsMobile } from '../../../../libs/useIsMobile';
import financial_freedom_banner from '../../../../public/images/454313434_1022241716126342_5347273031344518302_n.jpg';
import freedom_mobile_banner from '../../../../public/images/454313434_1022241716126342_5347273031344518302_n.jpg';
import handshake from '../../../../public/images/handshake.jpg'
import {
  addedEdges,
  desktopBriefNotePhrase,
  desktopBriefNoteSubPhrase,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileBriefNotePhrase,
  mobileBriefNoteSubPhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from './constants';

const FinancialFreedom = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Header>
          {isMobile ? (
            <div>
              <MaskText phrases={mobileHeaderPhrase} tag="h1" />
              <MaskText phrases={mobileParagraphPhrase} tag="p" />
            </div>
              ) : (
            <div>
              <MaskText phrases={desktopHeaderPhrase} tag="h1" />
              <MaskText phrases={desktopParagraphPhrase} tag="p" />
            </div>
          )}
        </Header>
        <BannerCtn>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <Image src={freedom_mobile_banner} alt="banner_img" fill />
            ) : (
              <Image src={financial_freedom_banner} alt="banner_img" fill />
            )}
          </Div>
        </BannerCtn>
        <Edges>
          {edges.map((edge, i) => (
            <Edge key={i}>
              <Title>
                <Image src={edge.icon} alt="icon" />
                <MaskText phrases={new Array(edge.point)} tag="h3" />
              </Title>
              <MaskText phrases={edge.details} tag="li"  />
            </Edge>
          ))}
        </Edges>
      </Inner>

      <InnerTwo>
        <BriefNoteCont>
          <BriefNote>
            {isMobile ? (
              <div>
                <MaskText phrases={mobileBriefNotePhrase} tag="h3" />
                <MaskText phrases={mobileBriefNoteSubPhrase} tag="p" />
              </div>
            ) : (
              <div>
                <MaskText phrases={desktopBriefNotePhrase} tag="h3" />
                <MaskText phrases={desktopBriefNoteSubPhrase} tag="p" />
              </div>
            )}
          </BriefNote>

          <BriefNoteCoverImg>
            {isMobile ? (
                <Image src={handshake} alt="banner_img" fill />
              ) : (
                <Image src={handshake} alt="banner_img" fill />
              )}
          </BriefNoteCoverImg>
        </BriefNoteCont>
      </InnerTwo>

    <Inner>
        <AddedEdges>
          {addedEdges.map((edge, i) => (
            <AddedEdge key={i}>
              <Title>
                <MaskText phrases={new Array(edge.point)} tag="h3" />
              </Title>
              <MaskText phrases={edge.details} tag="li"  />
            </AddedEdge>
          ))}
        </AddedEdges>
    </Inner>
    </Wrapper>
  );
};

export default FinancialFreedom;
