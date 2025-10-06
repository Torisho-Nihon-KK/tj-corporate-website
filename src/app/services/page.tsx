import Image from "next/image";
import SiteContent from "@/components/common/site-content";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card, CardContent } from "@/components/ui/card";
import CardWithCaption from "./card-with-caption";
import CallToAction from "../(landing)/call-to-action";
import { CTAButton } from "@/components/ui/cta-button";

export default function ServicesPage() {
    return (
        <SiteContent>
            <div className="flex gap-[100px] items-center flex-shrink-0 mb-[108px]">
                <div className="flex-shrink-0 max-w-[480px]">
                    <Image
                        src="/services/hero.svg"
                        alt="Services"
                        width={0}
                        height={0}
                        style={{
                            width: "auto",
                            maxHeight: "480px",
                            margin: "auto",
                        }}
                    />
                </div>
                <div className="flex flex-col gap-3 justify-end">
                    <div>
                        <Heading size="xl">月々8,000円から。</Heading>
                    </div>
                    <div>
                        <Heading>
                            社内にIT人材がいなくても、代行サービスで豊富なサポートが受けられます
                        </Heading>
                    </div>
                    <div>
                        <Text size="md">
                            ITに特化した人材が不足していたり、総務部に業務が集中しているといったことでお困りではありませんか？鳥商の「情シス業務代行」は、企業のお客様のIT活用とDX推進をお手伝いします。
                        </Text>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CardWithCaption
                    iconSrc="/services/1.svg"
                    iconAlt="Service 1"
                    iconMaxHeight={72}
                    header="問い合わせ対応・サポート"
                >
                    日常業務でパソコンを使う際に分からないことやトラブルがあった場合、お電話一本で当社のスタッフがサポートをご提供します。
                </CardWithCaption>
                <CardWithCaption
                    iconSrc="/services/2.svg"
                    iconAlt="Service 2"
                    iconMaxHeight={72}
                    header="コスト削減診断"
                >
                    日常業務でパソコンを使う際に分からないことやトラブルがあった場合、お電話一本で当社のスタッフがサポートをご提供します。
                </CardWithCaption>
                <CardWithCaption
                    iconSrc="/services/3.svg"
                    iconAlt="Service 3"
                    iconMaxHeight={72}
                    header="ITツール選定・導入支援"
                >
                    日常業務でパソコンを使う際に分からないことやトラブルがあった場合、お電話一本で当社のスタッフがサポートをご提供します。
                </CardWithCaption>
                <CardWithCaption
                    iconSrc="/services/4.svg"
                    iconAlt="Service 4"
                    iconMaxHeight={72}
                    header="問い合わせ対応・サポート"
                >
                    日常業務でパソコンを使う際に分からないことやトラブルがあった場合、お電話一本で当社のスタッフがサポートをご提供します。
                </CardWithCaption>
            </div>

            <Heading className="mt-[144px] mb-[50px]" size="xl">
                ソフトウェア・SaaS
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardContent className="p-6">
                        <Image
                            src={"/services/microsoft.svg"}
                            alt="Microsoft 365"
                            width={0}
                            height={60}
                            style={{
                                width: "auto",
                            }}
                        />
                        <Heading className="mt-[60px] mb-3" size="md">
                            Microsoft 365
                        </Heading>
                        <Text className="mb-6">
                            当社はマイクロソフト社の認定販売代理店です。Microsoft
                            365 / Office
                            365のライセンスの販売だけでなく、導入サポートもご提供します。
                        </Text>
                        <CTAButton>Xserver レンタルサーバー</CTAButton>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <Image
                            src={"/services/xserver.svg"}
                            alt="Xserver"
                            width={0}
                            height={60}
                            style={{
                                width: "auto",
                            }}
                        />
                        <Heading className="mt-[60px] mb-3" size="md">
                            エックスサーバー
                        </Heading>
                        <Text className="mb-6">
                            当社はエックスサーバービジネスパートナーとして、Xserver
                            レンタルサーバー・VPSの販売取次を行っております。
                        </Text>
                        <div className="flex gap-3">
                            <CTAButton>Xserver レンタルサーバー</CTAButton>
                            <CTAButton>Xserver VPS</CTAButton>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Heading className="mt-[144px] mb-[50px]" size="xl">
                ハードウェア販売
            </Heading>
            <div className="flex flex-row gap-6 items-center">
                <Card className="w-[16.67%] h-[312px]">
                    <CardContent className="p-0 overflow-hidden">
                        <Image
                            src={"/services/PS5-Photoroom.png"}
                            alt="Desktop"
                            width={415}
                            height={353}
                            className="top-[100px]"
                            style={{
                                position: "absolute",
                                scale: "2",
                            }}
                        />
                    </CardContent>
                </Card>
                <Card className="w-[41.67%] h-[312px]">
                    <CardContent className="p-0 overflow-hidden">
                        <Image
                            src={"/services/Laptop-Photoroom.png"}
                            alt="Laptop"
                            width={529}
                            height={449}
                            style={{
                                position: "absolute",
                            }}
                        />
                    </CardContent>
                </Card>
                <div className="ml-[26px] w-[41.67%]">
                    <Text fontSize={20}>
                        当社は日本HP（ヒューレット・パッカード）社正規販売代理店として、法人向けHPデスクトップPC・ノートパソコン・ワークステーションを取り扱っております。
                    </Text>
                </div>
            </div>

            <Heading className="mt-[144px] mb-[50px]" size="xl">
                固定回線契約取次
            </Heading>

            <div className="grid grid-cols-[45%_55%] h-[600px] gap-8">
                <div className="relative overflow-hidden bg-white rounded-2xl p-6 pt-[42px]">
                    <Text fontSize={82} className="relative font-semibold z-20">
                        月々4,180円~
                    </Text>
                    <Image
                        src={"/services/map.svg"}
                        alt="Map"
                        width={0}
                        height={0}
                        className="left-[25%] top-[30%]"
                        style={{
                            width: "100%",
                            height: "auto",
                            scale: "1.5",
                            position: "relative",
                        }}
                    />
                    {/* Fade */}
                    <div className="pointer-events-none absolute z-10 bottom-0 left-0 h-48 w-full bg-gradient-to-t from-white to-transparent"></div>
                    <div className="pointer-events-none absolute z-10 top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent"></div>
                </div>
                <div>
                    <Text fontSize={20}>
                        法人契約・個人事業主契約や、口座振替といった柔軟な契約オプションがあるプロバイダの光回線を、月々4,180円※からご利用いただけます。東京都板橋区・練馬区・北区のお客様限定で、訪問設定サービスもご提供しております。{" "}
                    </Text>
                    <Text
                        fontSize={14}
                        className="mt-[55px] text-primary-muted"
                    >
                        ※マンションタイプ・2年契約プランで当社が取次可能なプロバイダの最安値です。
                    </Text>
                </div>
            </div>

            <CallToAction />
        </SiteContent>
    );
}
