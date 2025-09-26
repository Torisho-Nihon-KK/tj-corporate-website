import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import SiteContent from "@/components/common/site-content";

import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { List, ListItem } from "@/components/ui/ordered-list";
import { Table } from "lucide-react";

export default function Legal() {
  return (
    <main>
      <section>
        <Header />
        <SiteContent>
          <Card>
            <CardContent>
              <Heading size="md" className="mb-8">
                特定商取引法に基づく表記
              </Heading>
              <table className="w-full table-auto border items-center text-align-left vertical-align-middle legal">
                <colgroup>
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "80%" }} />
                </colgroup>
                <tbody>
                  <tr>
                    <th>販売業者</th>
                    <td>鳥商日本株式会社</td>
                  </tr>
                  <tr>
                    <th>代表責任者</th>
                    <td>池田　笙</td>
                  </tr>
                  <tr>
                    <th>所在地</th>
                    <td>
                      〒174-0056
                      <br />
                      東京都板橋区志村一丁目３５番１０号
                    </td>
                  </tr>
                  <tr>
                    <th>電話番号</th>
                    <td>03-5918-9086</td>
                  </tr>
                  <tr>
                    <th>電話受付時間</th>
                    <td>10:00 から 19:00まで（土日祝日を除く）</td>
                  </tr>
                  <tr>
                    <th>メールアドレス</th>
                    <td>
                      <a href="mailto:support@torishojp.com">
                        support@torishojp.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>サイトアドレス</th>
                    <td>
                      <a href="https://www.torishojp.com/">
                        https://www.torishojp.com/
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>販売価格</th>
                    <td>
                      各商品および役務の詳細ページに記載、あるいは個別契約による
                    </td>
                  </tr>
                  <tr>
                    <th>商品代金以外に必要な料金</th>
                    <td>消費税、配送料（配送が必要な商品の場合）</td>
                  </tr>
                  <tr>
                    <th>引き渡し時期</th>
                    <td>個別契約によります。</td>
                  </tr>
                  <tr>
                    <th>お支払いの方法</th>
                    <td rowSpan={2}>
                      クレジットカード決済：ご契約時にお支払いが確定します。
                      <br />
                      銀行振込：ご契約時にお支払いが確定します。振込手数料はお客様のご負担となります。
                    </td>
                  </tr>
                  <tr>
                    <th>お支払いの時期</th>
                  </tr>
                  <tr>
                    <th>返品・交換</th>
                    <td>
                      原則として契約締結・当社による役務提供後のお客さまのご都合によるキャンセルはお受けできかねます。ただし、継続的な役務提供契約のご解約をご希望される場合は、個別契約に特段の記載がない限り、解約を希望される月の前月末日までにメールにてご連絡をお願いいたします。
                    </td>
                  </tr>
                  <tr>
                    <th>返品期限</th>
                    <td>
                      役務提供契約につき、当社が未着手の場合に限り、7日以内にメールにてご連絡をお願いいたします。
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </SiteContent>
        <Footer />
      </section>
    </main>
  );
}
