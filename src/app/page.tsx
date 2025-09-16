import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Database, MoveRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import Sidebar from "@/components/ui/sidebar";

export default function HomePage() {
  return (
    <main>
      <section>
        <Header />
        <div className="max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8">
          <Card className="text-center p-0">
            <Image
              src="/noise.svg"
              alt=""
              fill
              className="pointer-events-none select-none object-cover opacity-100 z-0"
              style={{ objectPosition: "center" }}
              priority
            />
            <CardContent className="py-17.25">
              {/* TODO:, rename image files, and clean up*/}
              <Image
                className="mx-auto"
                style={{
                  width: "auto",
                  maxHeight: "353px",
                }}
                width={0}
                height={0}
                src="/1.svg"
                alt="Logo"
              />
              <Text className="block relative pb-6" size="md">
                IT人材不足に、サヨナラを。
                <br />
                鳥商のITアウトソーシングが、貴社の情シスと
                <br className="block md:hidden" />
                なって事業拡大をお手伝いします。
              </Text>
              <Button>
                <Link href="/" className="flex items-center ">
                  <span className="pl-4 pr-2.5 x-2">お問い合わせはこちら</span>
                  <span className="rounded-full w-8 h-8 p-0 bg-white-15 flex items-center justify-center">
                    <MoveRight className="w-4 h-4" />
                  </span>
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="grid xl:grid-cols-2 grid-cols-1 text-center relative align-left mx-0 py-4 gap-3 xl:gap-0 items-center">
            <Image
              src="/3.svg"
              className="absolute xl:left-0 xl:top-[-15px] xl:rotate-180 top-[-10px] right-[-78px] scale-100 xl:scale-175"
              alt=""
              width={0}
              height={0}
              style={{ width: "auto", maxHeight: "150px" }}
            />
            <CardContent className="px-3 p-0 flex mx-auto xl:mr-[140px] my-auto align-right justify-center xl:justify-end text-right w-full items">
              <div className="flex items-center justify-end">
                <Image
                  src="/4.svg"
                  alt=""
                  className="inline-block"
                  width={0}
                  height={0}
                  style={{ width: "auto", maxHeight: "42px" }}
                />
                <Text className="ml-6">力強いパートナーネットワーク</Text>
              </div>
            </CardContent>
            <CardContent className="flex gap-2 md:gap-4 justify-self-center justify-end min-h-[37px] max-h-[55px] w-auto px-3 items-center m-auto xl:mr-[40px]">
              <div className="flex flex-1 items-center justify-center gap-4 md:gap-6 w-full h-full">
                <div className="flex-1 min-w-0 flex items-center justify-center">
                  <Image
                    src="/5.svg"
                    alt="XServer Business Partner"
                    className="h-full max-h-[55px] w-auto flex-shrink min-w-0"
                    width={0}
                    height={0}
                    style={{
                      objectFit: "contain",
                      maxHeight: "55px",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0 flex items-center justify-center">
                  <Image
                    src="/6.svg"
                    alt="HP Business Partner"
                    className="h-full max-h-[55px] w-auto flex-shrink min-w-0"
                    width={0}
                    height={0}
                    style={{
                      objectFit: "contain",
                      maxHeight: "55px",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0 flex items-center justify-center">
                  <Image
                    src="/6.5.svg"
                    alt="Microsoft Partner"
                    className="h-full max-h-[55px] w-auto flex-shrink min-w-0"
                    width={0}
                    height={0}
                    style={{
                      objectFit: "contain",
                      maxHeight: "55px",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="my-32"></div>
          <Card>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 text-left justify-center">
                <div className="mx-auto lg:mx-0 pb-3 lg:pb-0">
                  <Image
                    src="/17.svg"
                    alt="IT Outsourcing"
                    width={0}
                    height={0}
                    className="mb-3 m-auto lg:mx-0"
                    style={{
                      width: "auto",
                      maxHeight: "38px",
                      marginRight: "auto",
                    }}
                  />
                  <Heading size="md">情シス業務の統括代行</Heading>
                </div>

                <div className="px-3 m-auto lg:mr-2 flex gap-10.5 max-h-37.5 items-center justify-self-center lg:justify-self-end lg:items-right my-auto">
                  <div>
                    <Image
                      src="/7.svg"
                      alt=""
                      width={0}
                      height={0}
                      style={{
                        width: "auto",
                        maxHeight: "150px",
                        margin: "auto",
                      }}
                    />
                  </div>
                  <div>
                    <Image
                      src="/8.svg"
                      alt=""
                      width={0}
                      height={0}
                      style={{
                        width: "auto",
                        maxHeight: "150px",
                        margin: "auto",
                      }}
                    />
                  </div>
                  <div>
                    <Image
                      src="/9.svg"
                      alt=""
                      width={0}
                      height={0}
                      style={{
                        width: "auto",
                        maxHeight: "150px",
                        margin: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid xl:grid-cols-3 gap-3">
            <Card>
              <CardContent className="grid grid-cols-[80px_1fr] md:grid-cols-1 gap-6 md:gap-12.5 items-center">
                <div className="max-w-[80px] md:max-w-[200px] m-auto">
                  <Image
                    src="/10.svg"
                    alt="Cost Reduction"
                    width={0}
                    height={0}
                    style={{
                      width: "auto",
                      maxHeight: "200px",
                      margin: "auto",
                    }}
                  />
                </div>
                <div className="justify-end">
                  <Heading className="pb-0">コスト削減診断</Heading>
                  <Text className="pt-3 pb-0">
                    ベンダー企業との契約に含まれるパッケージが、すべて貴社にとって重要であるとは限りません。活用できていない保守契約やサブスクリプションを見直してみませんか？
                  </Text>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="grid grid-cols-[80px_1fr] md:grid-cols-1 gap-6 md:gap-12.5 items-center">
                <Image
                  src="/11.svg"
                  alt="Tool Selection and Implementation Support"
                  width={0}
                  height={0}
                  style={{ width: "auto", maxHeight: "200px", margin: "auto" }}
                />
                <div>
                  <Heading className="pb-0">ツール選定・導入支援</Heading>
                  <Text className="pt-3 pb-0">
                    業務効率化に役立つシステムやソフトウェアを、貴社のご要望に見合う形で選定。経営目線と現場目線の両方の視点から、無理のない運用ができる最適なパッケージをご提案します。
                  </Text>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="grid grid-cols-[80px_1fr] md:grid-cols-1 gap-6 md:gap-12.5 items-center">
                <Image
                  src="/12.svg"
                  alt="Management Support"
                  width={0}
                  height={0}
                  style={{ width: "auto", maxHeight: "200px", margin: "auto" }}
                />
                <div className="justify-end">
                  <Heading className="pb-0">管理・運用支援</Heading>
                  <Text className="pt-3 pb-0">
                    DX（デジタルトランスフォーメーション）は、導入することだけがゴールではありません。持続可能な運用で貴社の利益が最大化されるように、導入後もお客さまと一緒に走り続けます。
                  </Text>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className=""></div>

          <div className="grid items-center my-16 gap-y-1.5">
            <Card>
              <CardContent className="flex items-center justify-left gap-6">
                <div className="max-w-[330px] mr-auto">
                  <Heading className="pb-3">ソフトウェア販売</Heading>
                  <Text className="pb-0">
                    オフィスソフトからERPまで。サブスクリプション版ソフトウェアライセンスを販売しています。
                  </Text>
                </div>
                <div className="max-w-[80px] md:max-w-[220px]">
                  <Image
                    src="/13.svg"
                    alt="ソフトウェア販売"
                    width={0}
                    height={0}
                    style={{
                      width: "auto",
                      maxHeight: "200px",
                      margin: "auto",
                    }}
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-left gap-6">
                <div className="max-w-[330px] mr-auto">
                  <Heading className="pb-3">ハードウェア販売</Heading>
                  <Text className="pb-0">
                    パソコン、プリンタなどのOA機器を、競争力のあるアフターサービスを添えてお届けします。
                  </Text>
                </div>
                <div className="max-w-[80px] md:max-w-[220px]">
                  <Image
                    src="/14.svg"
                    alt="ハードウェア販売"
                    width={0}
                    height={0}
                    style={{
                      width: "auto",
                      maxHeight: "200px",
                      margin: "auto",
                    }}
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-left gap-6">
                <div className="max-w-[330px] mr-auto">
                  <Heading className="pb-3">固定回線契約取次</Heading>
                  <Text className="pb-0">
                    当社では、NTT東日本・西日本の光コラボレーションモデルを中心に光回線の契約をお取次ぎしています。
                  </Text>
                </div>
                <div className="max-w-[80px] md:max-w-[220px]">
                  <Image
                    src="/15.svg"
                    alt="固定回線契約取次"
                    width={0}
                    height={0}
                    style={{
                      width: "auto",
                      maxHeight: "200px",
                      margin: "auto",
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="my-16 align-center text-center">
            <Heading className="pb-6" mobileSize="md">
              ITで困ったら、
              <br className="block md:hidden" />
              いつでも呼んでください
            </Heading>
            <Button>
              <Link href="/" className="flex items-center ">
                <span className="pl-4 pr-2.5 x-2">お問い合わせはこちら</span>
                <span className="rounded-full w-8 h-8 p-0 bg-white-15 flex items-center justify-center">
                  <MoveRight className="w-4 h-4" />
                </span>
              </Link>
            </Button>
          </div>
          <Footer />
        </div>
      </section>
    </main>
  );
}
