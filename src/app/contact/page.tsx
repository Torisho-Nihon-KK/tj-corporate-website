"use client";
import React, { useState } from "react";
import SiteContent from "@/components/common/site-content";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Form, useForm, SubmitHandler, Controller } from "react-hook-form";
import { Text } from "@/components/ui/text";
import PhoneInput from "react-phone-number-input";
import { Button } from "@/components/ui/button";
import * as RadixCheckbox from "@radix-ui/react-checkbox";

type ContactFormData = {
    firstName: string;
    lastName: string;
    companyName: string;
    phoneNumber: string;
    email: string;
    message: string;
    communication: boolean;
    consent: boolean;
};

export default function App() {
    const {
        register,
        formState: { errors },
        control,
    } = useForm<ContactFormData>();
    const [phoneNumber, setPhoneNumber] = useState<string>();

    return (
        <SiteContent>
            <Card>
                <CardContent>
                    <div className="flex flex-col gap-6 align-center items-center px-[100px]">
                        <Heading>お問い合わせ</Heading>

                        <Text>
                            貴社のよりよい未来のために、鳥商がお手伝いできることがありますか？
                            お気軽に下記のフォームからお問い合わせください。原則として2銀行営業日以内に折り返しご連絡を差し上げます。
                        </Text>

                        <Form
                            action={"/api/sendEmail"}
                            encType={"application/json"}
                            onSubmit={async (data) => {
                                console.log(data);
                            }}
                            onSuccess={() => {
                                alert("Your application is updated.");
                            }}
                            onError={() => {
                                alert("Submission has failed.");
                            }}
                            control={control}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Text>
                                        姓
                                        <span className="text-red-500">*</span>
                                    </Text>
                                    <input
                                        className="border p-2 border-gray-300 rounded-full w-full"
                                        defaultValue=""
                                        {...register("lastName", {
                                            required: true,
                                        })}
                                    />
                                    {errors.lastName && (
                                        <Text className="text-red-500">
                                            この必須項目を入力してください。
                                        </Text> /* This field is required */
                                    )}
                                </div>
                                <div>
                                    <Text>
                                        名
                                        <span className="text-red-500">*</span>
                                    </Text>
                                    <input
                                        className="border p-2 border-gray-300 rounded-full w-full"
                                        defaultValue=""
                                        {...register("firstName", {
                                            required: true,
                                        })}
                                    />
                                    {errors.firstName && (
                                        <Text className="text-red-500">
                                            この必須項目を入力してください。
                                        </Text> /* This field is required */
                                    )}
                                </div>
                                <div className="col-span-2">
                                    <Text>
                                        会社名
                                        <span className="text-red-500">*</span>
                                    </Text>
                                    <input
                                        className="border p-2 border-gray-300 w-full rounded-full "
                                        defaultValue=""
                                        {...register("companyName", {
                                            required: true,
                                        })}
                                    />
                                    {errors.companyName && (
                                        <Text className="text-red-500">
                                            この必須項目を入力してください。
                                        </Text> /* This field is required */
                                    )}
                                </div>
                                <div className="col-span-2">
                                    <Text>電話番号</Text>
                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        className="border p-2 border-gray-300 rounded-full w-full"
                                        value={phoneNumber}
                                        withCountryCallingCode
                                        international
                                        {...register("phoneNumber", {})}
                                        onChange={setPhoneNumber}
                                    />
                                    {errors.phoneNumber && (
                                        <span className="text-red-500">
                                            この必須項目を入力してください。
                                        </span> /* This field is required */
                                    )}
                                </div>
                                <div className="col-span-2">
                                    <Text>
                                        Eメール
                                        <span className="text-red-500">*</span>
                                    </Text>
                                    <input
                                        className="border p-2 border-gray-300 rounded-full w-full"
                                        defaultValue=""
                                        {...register("email", {
                                            required: true,
                                        })}
                                    />
                                    {errors.email && (
                                        <Text className="text-red-500">
                                            この必須項目を入力してください。
                                        </Text> /* This field is required */
                                    )}
                                </div>
                                <div className="col-span-2">
                                    <Text>
                                        より詳しい内容をご入力ください
                                        <span className="text-red-500">*</span>
                                    </Text>
                                    <textarea
                                        className="border p-2 border-gray-300 rounded-lg w-full h-60"
                                        defaultValue=""
                                        {...register("message", {
                                            required: true,
                                        })}
                                    />
                                    {errors.message && (
                                        <Text className="text-red-500">
                                            この必須項目を入力してください。
                                        </Text> /* This field is required */
                                    )}
                                </div>
                                <div className="col-span-2">
                                    <Text>
                                        鳥商日本株式会社は、お客さまのプライバシー保護に全力で取り組んでおり、いただいた個人情報はお客さまのアカウントを管理する目的および、お客さまが希望される当社の製品やサービスを提供する目的でのみ利用いたします。当社の製品やサービス、その他お客さまがご興味をお持ちのコンテンツに関し、お客さまにご連絡を差し上げる場合があります。当社からご連絡を差し上げることにご同意いただける場合、以下のチェックボックスにチェックを入れてください。
                                    </Text>
                                </div>
                                <div className="col-span-2 flex items-center">
                                    <Controller
                                        name="communication"
                                        control={control}
                                        render={({ field }) => (
                                            <RadixCheckbox.Root
                                                id="communication"
                                                className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center"
                                                checked={!!field.value}
                                                onCheckedChange={field.onChange}
                                            >
                                                <RadixCheckbox.Indicator className="text-primary">
                                                    {/* You can use an SVG checkmark here if desired */}
                                                    ✓
                                                </RadixCheckbox.Indicator>
                                            </RadixCheckbox.Root>
                                        )}
                                    />
                                    <label
                                        htmlFor="communication"
                                        className="ml-2"
                                    >
                                        鳥商日本株式会社からのご連絡に同意します
                                    </label>
                                </div>
                                <div className="col-span-2">
                                    <Text>
                                        お客さまから求められた情報を提供するために、当社ではお客さまの個人情報を保管し、処理する必要があります。こうした目的で個人情報を保管することに同意いただける場合は、下のチェックボックスをオンにしてください。
                                    </Text>
                                </div>
                                <div className="col-span-2 flex items-center">
                                    {/* Use Controller for react-hook-form integration with Radix Checkbox */}
                                    <Controller
                                        name="consent"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <RadixCheckbox.Root
                                                id="consent"
                                                className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center"
                                                checked={!!field.value}
                                                onCheckedChange={field.onChange}
                                            >
                                                <RadixCheckbox.Indicator className="text-primary">
                                                    {/* You can use an SVG checkmark here if desired */}
                                                    ✓
                                                </RadixCheckbox.Indicator>
                                            </RadixCheckbox.Root>
                                        )}
                                    />
                                    <label htmlFor="consent" className="ml-2">
                                        鳥商日本株式会社が私の個人情報を保存して処理することを許可することに同意します。
                                        <span className="text-red-500">*</span>
                                    </label>
                                </div>
                                <div className="col-span-2">
                                    {errors.consent && (
                                        <Text className="text-red-500 mt-0 mb-2">
                                            この必須項目を入力してください。
                                        </Text> /* This field is required */
                                    )}{" "}
                                </div>
                                <div className="col-span-2">
                                    <Text>
                                        当社からのこのような配信はいつでも停止していただけます。配信の停止方法や、お客さまのプライバシーの尊重および保護に関する取り組みについては、当社のプライバシーポリシーをご確認ください。
                                    </Text>
                                </div>
                            </div>
                            <div className="mt-[100px] mb-2">
                                {(errors.firstName ||
                                    errors.lastName ||
                                    errors.companyName ||
                                    errors.email ||
                                    errors.message ||
                                    errors.consent) && (
                                    <Text className="text-red-500">
                                        全ての必須項目に入力してください。
                                    </Text>
                                )}
                            </div>
                            <Button type="submit" className="w-full ">
                                送信
                            </Button>
                        </Form>
                    </div>
                </CardContent>
            </Card>
        </SiteContent>
    );
}
