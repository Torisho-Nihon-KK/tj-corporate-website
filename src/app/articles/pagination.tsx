import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function Pagination() {
    return (
        <div className="flex items-center justify-center gap-3 bg-white rounded-full p-1.5 w-fit mx-auto">
            <Button variant="secondary" size="sm">
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                        fill="currentColor"
                    ></path>
                </svg>
                前
            </Button>
            <svg
                width="37"
                height="4"
                viewBox="0 0 37 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g opacity="0.25">
                    <circle cx="2.5" cy="2" r="2" fill="#262626" />
                    <circle cx="18.5" cy="2" r="2" fill="#262626" />
                    <circle cx="34.5" cy="2" r="2" fill="#262626" />
                </g>
            </svg>
            <Text size="md">20ページ中1ページ目</Text>
            <svg
                width="37"
                height="4"
                viewBox="0 0 37 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g opacity="0.25">
                    <circle cx="2.5" cy="2" r="2" fill="#262626" />
                    <circle cx="18.5" cy="2" r="2" fill="#262626" />
                    <circle cx="34.5" cy="2" r="2" fill="#262626" />
                </g>
            </svg>
            <Button variant="secondary" size="sm">
                次
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </Button>
        </div>
    );
}
