import Header from "@/components/banners/header";
import Footer from "@/components/banners/footer";
import SiteContent from "@/components/common/site-content";

import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { List, ListItem } from "@/components/ui/ordered-list";

export default function Privacy() {
    return (
        <SiteContent>
            <Card>
                <CardContent className="p-12">
                    <Heading size="md" className="pb-8">
                        個人情報保護方針
                    </Heading>
                    <Text className="mt-4 mb-4">
                        鳥商日本株式会社（以下、「当社」）は、個人情報保護法およびその他の法令の定めに基づき、当社から商品および役務の提供を受けるお客さまの個人情報について、個人の人格尊重の理念のもとに慎重にかつ善良なる管理者の注意義務をもって適正な取り扱いに努めています。
                    </Text>
                    <Text className="mt-4 mb-4">
                        本書は、当社がお客さまからどのような個人情報を取得し、どのような方法で利用・共有するのか、または、お客さまがどのようにご自身の個人情報を管理できるかを説明するものです。
                    </Text>
                    <Heading className="mt-8 mb-4">
                        第1条 取得する個人情報の範囲
                    </Heading>
                    <Text>当社は、以下の情報を取得する場合があります。</Text>
                    <List ordered className="mb-4">
                        <ListItem>
                            氏名、会社名、部署名、役職等、個人を特定できる情報
                        </ListItem>
                        <ListItem>
                            住所、電話番号、メールアドレス等の連絡先で、特定の個人との接触が可能になる情報
                        </ListItem>
                        <ListItem>
                            契約内容、取引履歴、請求・支払等の当社とお客さまとの取引に係る情報
                        </ListItem>
                        <ListItem>
                            その他、業務の遂行上必要で、かつ個人を特定できる情報
                        </ListItem>
                    </List>
                    <Heading className="mt-8 mb-4">第2条 利用目的</Heading>
                    <Text>
                        第1条に掲げる取得した個人情報は、下記の目的に限り利用することがあります。
                    </Text>
                    <List ordered>
                        <ListItem>
                            商品・役務の提供およびそれに付随する業務の遂行のため
                        </ListItem>
                        <ListItem>
                            契約の履行、支払・請求処理、アフターサービスの提供のため
                        </ListItem>
                        <ListItem>
                            問い合わせへの対応および重要なお知らせの通知のため
                        </ListItem>
                        <ListItem>
                            サービス改善および品質向上に資する分析のため
                        </ListItem>
                        <ListItem>法令に基づく対応のため</ListItem>
                    </List>
                    <Heading className="mt-8 mb-4">第3条 第三者提供</Heading>
                    <Text>
                        当社は、下記に定める場合を除き、個人情報を第三者に提供することはありません。
                    </Text>
                    <List ordered>
                        <ListItem>本人の同意がある場合</ListItem>
                        <ListItem>
                            当社の業務委託先に対し、利用目的の達成に必要な範囲で提供する場合（この場合、当社は委託先と秘密保持契約を締結し、当該委託先が本書と同等以上の取り扱いを履行するよう適切な監督を行います。）
                        </ListItem>
                        <ListItem>
                            個人情報保護法以外の法令に基づき、個人情報を第三者に提供することが義務付けられている場合
                        </ListItem>
                        <ListItem>
                            人の生命、身体または財産の保護のために、個人情報の第三者提供が必要であって、本人の同意を得ることが困難である場合
                        </ListItem>
                        <ListItem>
                            公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難である場合
                        </ListItem>
                        <ListItem>
                            国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要があり、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合
                        </ListItem>
                    </List>
                    <Heading className="mt-8 mb-4">第4条 安全管理措置</Heading>
                    <Text>
                        当社は、個人情報の漏洩、滅失、毀損等を防止するため、以下の安全管理措置を講じます。
                    </Text>
                    <List ordered>
                        <ListItem>
                            アクセス制限、暗号化（SSL - Secure Socket
                            Layerの技術によるものを含む）、ログ管理等の技術的対策
                        </ListItem>
                        <ListItem>
                            社員教育、取扱規程の整備等の組織的及び人的対策
                        </ListItem>
                    </List>
                    <Heading className="mt-8 mb-4">
                        第5条 開示、訂正、削除等の請求
                    </Heading>
                    <Text>
                        お客さまは、当社に対して自己の個人情報の開示、訂正、利用停止、削除等を請求することができます。請求される場合は、support@torishojp.comまでご連絡ください。
                    </Text>
                    <Heading className="mt-8 mb-4">第6条 同意の撤回</Heading>
                    <Text>
                        お客さまは、いつでも本同意を撤回することができますが、同意の撤回により、当社からの商品または役務の提供が受けられなくなる場合があります。
                    </Text>
                    <Heading size="sm" className="mt-8 mb-4">
                        取扱管理者
                    </Heading>
                    <Text>
                        〒174-0056
                        <br />
                        東京都板橋区志村一丁目３５番１０号
                        <br />
                        鳥商日本株式会社
                        <br />
                        代表取締役　池田　笙.
                    </Text>
                </CardContent>
            </Card>
        </SiteContent>
    );
}
