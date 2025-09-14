import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Database, MoveRight } from "lucide-react";
import { Terminal } from "./terminal";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section>
        <div className="max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8">
          <Header />
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
              <h4 className="text-2xl block relative pb-6">
                IT人材不足に、サヨナラを。
                <br />
                鳥商のITアウトソーシングが、貴社の情シスとなって事業拡大をお手伝いします。
              </h4>
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

          <Card className="grid lg:grid-cols-2 grid-cols-1 text-center relative overflow-hidden align-left items-start mx-0 p-0">
            <CardContent>
              <div className="align-left p-0 text-left flex items-center">
                <Image
                  src="/3.svg"
                  className="inline-block p-0 pr-8"
                  alt=""
                  width={0}
                  height={0}
                  style={{ width: "auto", maxHeight: "150px" }}
                />
                <Image
                  src="/4.svg"
                  alt=""
                  className="inline-block"
                  width={0}
                  height={0}
                  style={{ width: "auto", maxHeight: "42px" }}
                />
                <h4 className="ml-6">力強いパートナーネットワーク</h4>
              </div>
            </CardContent>
            <CardContent className="lg:justify-self-end justify-self-center my-auto">
              <div className="px-3 grid-cols-3 lg:items-right ml-auto lg:mr-2 flex gap-3 max-h-13.75">
                <div>
                  <Image
                    src="/5.svg"
                    alt="XServer Business Partner"
                    width={0}
                    height={0}
                    style={{ width: "auto", maxHeight: "55px" }}
                  />
                </div>
                <div>
                  <Image
                    src="/6.svg"
                    alt="HP Business Partner"
                    width={0}
                    height={0}
                    style={{ width: "auto", maxHeight: "55px" }}
                  />
                </div>
                <div>
                  <Image
                    src="/6.5.svg"
                    alt="Microsoft Partner"
                    width={0}
                    height={0}
                    style={{ width: "auto", maxHeight: "55px" }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="my-32"></div>
          <Card>
            <CardContent>
              <div className="grid lg:grid-cols-2 text-left justify-center">
                <div>
                  <Image
                    src="/17.svg"
                    alt="IT Outsourcing"
                    width={0}
                    height={0}
                    style={{
                      width: "auto",
                      maxHeight: "38px",
                      marginRight: "auto",
                    }}
                  />
                  <h2 className="pt-3 pb-3 lg:pb-0">情シス業務の統括代行</h2>
                </div>

                <div className="px-3 grid-cols-3 ml-auto lg:mr-2 grid gap-10.5 max-h-37.5 items-center justify-self-center lg:justify-self-end lg:items-right my-auto">
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
              <CardContent>
                <Image
                  src="/10.svg"
                  alt="Cost Reduction"
                  width={0}
                  height={0}
                  style={{ width: "auto", maxHeight: "200px", margin: "auto" }}
                />
                <h3 className="pt-12.5 pb-0">コスト削減診断</h3>
                <p className="pt-3 pb-0  text-justify-auto">
                  ベンダー企業との契約に含まれるパッケージが、すべて貴社にとって重要であるとは限りません。活用できていない保守契約やサブスクリプションを見直してみませんか？
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src="/11.svg"
                  alt="Tool Selection and Implementation Support"
                  width={0}
                  height={0}
                  style={{ width: "auto", maxHeight: "200px", margin: "auto" }}
                />
                <h3 className="pt-12.5 pb-0">ツール選定・導入支援</h3>
                <p className="pt-3 pb-0 text-justify-auto">
                  業務効率化に役立つシステムやソフトウェアを、貴社のご要望に見合う形で選定。経営目線と現場目線の両方の視点から、無理のない運用ができる最適なパッケージをご提案します。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src="/12.svg"
                  alt="Management Support"
                  width={0}
                  height={0}
                  style={{ width: "auto", maxHeight: "200px", margin: "auto" }}
                />
                <h3 className="pt-12.5 pb-0">管理・運用支援</h3>
                <p className="pt-3 pb-0 text-justify-auto">
                  DX（デジタルトランスフォーメーション）は、導入することだけがゴールではありません。持続可能な運用で貴社の利益が最大化されるように、導入後もお客さまと一緒に走り続けます。
                </p>
              </CardContent>
            </Card>
          </div>
          <div className=""></div>

          <div className="grid items-center my-16 gap-y-1.5">
            <Card>
              <CardContent className="grid grid-cols-2 items-center">
                <div className="max-w-3/5 ">
                  <h3 className="p-0">ソフトウェア販売</h3>
                  <p className="pt-3 pb-0  text-justify-auto">
                    オフィスソフトからERPまで。サブスクリプション版ソフトウェアライセンスを販売しています。
                  </p>
                </div>
                <div className="justify-self-end ml-auto">
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
              <CardContent className="grid grid-cols-2 items-center">
                <div className="max-w-3/5">
                  <h3 className="p-0">ハードウェア販売</h3>
                  <p className="pt-3 pb-0  text-justify-auto">
                    パソコン、プリンタなどのOA機器を、競争力のあるアフターサービスを添えてお届けします。
                  </p>
                </div>
                <div className="justify-self-end">
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
              <CardContent className="grid grid-cols-2 items-center">
                <div className="max-w-3/5">
                  <h3 className="p-0">固定回線契約取次</h3>
                  <p className="pt-3 pb-0  text-justify-auto">
                    当社では、NTT東日本・西日本の光コラボレーションモデルを中心に光回線の契約をお取次ぎしています。
                  </p>
                </div>
                <div className="justify-self-end">
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
            <h3 className="pb-6">ITで困ったら、いつでも呼んでください</h3>
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
