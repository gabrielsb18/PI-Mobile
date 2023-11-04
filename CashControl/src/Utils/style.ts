import { Pressable } from "react-native";
import styled from "styled-components/native";

const fonts = {
    InterRegular: '../../assets/Fonts/InterRegular.ttf',
    InterMedium: '../../assets/Fonts/InterMedium.ttf',
    InterBold: '../../assets/Fonts/InterBold.ttf',
    InterLight: '../../assets/Fonts/InterLight.ttf',
};

export const Footer = styled.View`
    flex: 1;
    width: 100%;
`;

export const ContentFlat = styled.View`
    padding: 15px 45px;
    flex-direction: row;
`;
export const ContentFloatHeader = styled.View `
    flex-direction: row;
    padding: 23px 45px 16px;
    align-items: center;
    justify-content: space-between;
`;
export const Title = styled.Text `
    font-family: 'InterRegular';
    letter-spacing: -0.3px;
    font-size: 15px;
`;
export const ButtonVerTodos = styled.TouchableOpacity`
    padding: 3px;
`;
export const ButtonTitleVerTodos = styled.Text `
    font-family: 'InterRegular';
    font-size: 13px;
    color: #75B700;
`;

export const IconTransaction = styled.Image `
    width: 55px;
    height: 55px;
`;
export const DetailsTransaction = styled.View `
    flex: auto;
    padding: 0 10px;
`;
export const NameTransaction = styled.Text `
    font-family: 'InterRegular';
    font-size: 16px;
`;
export const SubtitleTransaction = styled.Text `
    font-family: 'InterRegular';
    font-size: 12px;
    font-weight: 400;
`;
export const AmountTransaction = styled.Text `
    font-family: 'InterBold';
    color: #75B700;
`;