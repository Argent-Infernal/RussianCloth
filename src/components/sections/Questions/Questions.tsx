'use client'

import Title from '@/components/ui/Title/Title'
import styles from './Questions.module.scss'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useScroll } from '@/Providers/ScrollProvider'

const QuestionTable = [
    {
        title: 'Как я могу сделать заказ?',
        text: 'Чтобы сделать заказ, выберите товары, которые вас интересуют, добавьте их в корзину, а затем перейдите к оформлению заказа. Вам нужно будет ввести свои контактные данные и выбрать способ доставки.'
    },
    {
        title: 'Как долго будет обрабатываться мой заказ?',
        text: 'Обычно заказы обрабатываются в течение 1-3 рабочих дней. После отправки вы получите уведомление с номером отслеживания.'
    },
    {
        title: 'Могу ли я изменить или отменить свой заказ?',
        text: 'Если вы хотите изменить или отменить свой заказ, пожалуйста, свяжитесь с нашей службой поддержки как можно скорее. Мы сможем внести изменения, если заказ еще не был отправлен.'
    },
    {
        title: 'Как я могу вернуть товар?',
        text: 'Если вы хотите вернуть товар, пожалуйста, свяжитесь с нашей службой поддержки в течение 14 дней с момента получения заказа. Мы предоставим вам инструкции по возврату.'
    },
    {
        title: 'Как я могу отслеживать свой заказ?',
        text: 'После отправки вашего заказа вы получите электронное письмо с номером отслеживания. Вы можете использовать этот номер на сайте курьерской службы, чтобы отслеживать статус доставки.'
    }
]

export default function Questions() {
    const { sectionRefs } = useScroll();

    return  (
        <div ref = {sectionRefs.questionsSection} className={styles.mainBlock}>
            <Title className='mb-5' title='Часто задаваемые вопросы'/>

            <div className={styles.questionsBlock}>
                <Accordion type="single" collapsible>

                    {
                        QuestionTable.map((question, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className='text-lg'>{question.title}</AccordionTrigger>
                                <AccordionContent className='text-base'>
                                    {question.text}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </div>
    )
}