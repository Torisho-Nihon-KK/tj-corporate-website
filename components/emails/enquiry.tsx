import {
    Body,
    Head,
    Heading,
    Html,
    Text,
    pixelBasedPreset,
    Tailwind,
    Container,
    Section,
    Row,
    Hr,
} from "@react-email/components";

export default function EnquiryEmailContent({
    firstName = "名",
    lastName = "姓",
    companyName = "会社名",
    email = "test@email.com",
    phoneNumber = "+1234567890",
    message = "璧ス彩銀位新ぱ選画クラマモ暴併ケ顔10協傍剰哀9山すのんゃ野康ユ社一ゅる社就ネヨ新鳴食レモカホ聞62監トア数肉あた水選くむド点方っ部壊層恐大るみざ。\n\n残は騰料ヱスモマ連品の立賠ユメ日門タ和容きるは変惑モヲヤ以名やッぼる軽条菓ゆひ未人チニ型件実比9村チソヒ索植ワコオト連39急色幹印禁ドそる。\n囲ふ山姫伝をびれド不速ツハ設語がぴんリ先衛ニシ事条にこどラ松通レエメク分率ょだがぐ値各題セソ方落メヒ真政薦ヤソ経支ルコヨト講学レぽ共権は町内ホレコテ朝備掛わき。景記クテ下写調クナヒ隊膚交あへ王命ニネ併57新ぼねひて励装本リネ申競セ変偽べひ短熊ワアネ海典進未えルや。東フべ登激量ね続和さのきい問年ん国31稿レヘキソ校57真りへむな周写帰せんぽ事忙さおいぞ日87省ぽずめリ山古イ。",
    communication = false,
    timestamp = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }),
}: {
    firstName?: string;
    lastName?: string;
    companyName?: string;
    email?: string;
    phoneNumber?: string;
    message?: string;
    communication?: boolean;
    timestamp?: string;
}) {
    return (
        <Html>
            <Head />
            <Tailwind
                config={{
                    presets: [pixelBasedPreset],
                }}
            >
                <Body>
                    <Container className="mx-auto my-auto font-sans border border-solid p-6 border-gray-300 rounded-lg">
                        <Heading className="">
                            お問い合わせフォームへの新規投稿
                        </Heading>
                        <Text>Time submitted: {timestamp} GMT+9</Text>
                        <Hr />
                        <Section>
                            <Row>
                                <Heading className="mb-0" as="h3">
                                    姓：
                                </Heading>
                                <Text className="my-0">{lastName}</Text>
                            </Row>
                            <Row>
                                <Heading className="mb-0" as="h3">
                                    名：
                                </Heading>
                                <Text className="my-0">{firstName}</Text>
                            </Row>
                            <Row>
                                <Heading className="mb-0" as="h3">
                                    会社名：
                                </Heading>
                                <Text className="my-0">{companyName}</Text>
                            </Row>
                            <Row>
                                <Heading className="mb-0" as="h3">
                                    電話番号：
                                </Heading>
                                <Text className="my-0">{phoneNumber}</Text>
                            </Row>
                            <Row>
                                <Heading className="mb-0" as="h3">
                                    Eメール：
                                </Heading>
                                <Text className="my-0">{email}</Text>
                            </Row>
                            <Row>
                                <Heading className="mb-0" as="h3">
                                    より詳しい内容をご入力ください：
                                </Heading>
                                {message.split(/\n{2,}/).map((para, idx) => (
                                    <div key={idx} className="mb-5">
                                        {para
                                            .split("\n")
                                            .map((line, lineIdx) => (
                                                <Text
                                                    className="my-0"
                                                    key={lineIdx}
                                                >
                                                    {line}
                                                </Text>
                                            ))}
                                    </div>
                                ))}
                            </Row>
                            <Row>
                                <Heading className="mb-0" as="h3">
                                    鳥商日本株式会社からのご連絡に同意します：
                                </Heading>
                                <Text className="my-0">
                                    {communication ? "はい" : "いいえ"}
                                </Text>
                            </Row>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
