import { useRouter, useSearchParams } from "next/navigation";
import { IGetCompanyResponse } from "@/models/companie.model";
import Button from "@/components/atoms/button/Button";
import styles from './pagination.module.scss';
import { icons } from "@/components/atoms/Icons";
import { IVacanciesResponse } from "@/models/vacancie.model";

interface IProps {
    data: IVacanciesResponse;
}

function PaginationVacancie({ data }: IProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = data.pageable.pageNumber + 1;
    const totalPages = data.totalPages;

    const onPageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());
        router.push(`?${params.toString()}`);
    };

    return (
        <div className={styles.paginationContainer}>
            <div>
                <Button className={styles.button} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                    {icons.beforePagination}
                </Button>
            </div>

            <span className={styles.strong}>Página {currentPage} de {totalPages}</span>

            <div>
                <Button className={styles.button} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    {icons.nextPagination}
                </Button>
            </div>

        </div>
    );
}

export default PaginationVacancie;
