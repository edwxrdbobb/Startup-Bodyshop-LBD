'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  Offers,
  OfferCard,
  ImageCtn,
  TextCtn,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  desktopParagraphPhrase,
  mobileParagraphPhrase,
  offers,
} from './Constants';

const FoundersStory = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <Header>
            {isMobile ? (
                <MaskText phrases={mobileParagraphPhrase} tag="p" />
            ) : (
                <MaskText phrases={desktopParagraphPhrase} tag="p" />
            )}
          <MaskText phrases={desktopHeaderPhrases} tag="h1" />

        </Header>
        <Offers>
          {offers.slice(0, 2).map((offer, i) => (
            <OfferCard key={i}>
                {offer.illustration ?
              <ImageCtn>
                <Image src={offer.illustration} alt="illustration" />
              </ImageCtn>
              :
              ''
                }
              <TextCtn>
                <MaskText phrases={new Array(offer.title)} tag="h2" />
                <p>{offer.details}</p>
              </TextCtn>
            </OfferCard>
          ))}
        </Offers>
   
      </Inner>
    </Wrapper>
  );
};

export default FoundersStory;
