import SectionHeading from '@/components/SectionHeading'
import { ViewAllButton } from '@/components/ViewAllButton'
import { getArticles } from '@/lib/actions/articles'
import { formatDate } from '@/lib/utils'
import React from 'react'

interface Article {
    pubDate?: string,
    title?: string,
    content?: string,
    link?: string,
}

const Articles = async ({ page = 'home', className }: { page: 'home' | 'blogs', className?: string }) => {
    const articles: Article[] = await getArticles();

    return (
        <section>
            <div className={`container ${className}`}>
                <div className="flex flex-col gap-8">
                    <SectionHeading>{page === 'home' ? 'Recent Articles' : 'Articles'}</SectionHeading>

                    <div className="flex flex-wrap gap-6 justify-center items-start">
                        {page === 'home' && (
                            <>
                                {articles.length > 0 && articles?.slice(0, 2).map((article) => (
                                    <div
                                        key={article.pubDate}
                                        className='flex-basis-[calc(50%-1.5rem)] max-w-[615px] flex flex-col gap-2 rounded-2xl bg-background p-6'
                                    >
                                        <div className='pl-2 border-l-2 font-normal text-base leading-[18.27px]'>
                                            {formatDate(article.pubDate!)}
                                        </div>
                                        <h3 className='font-bold leading-[18.51px]'>{article.title}</h3>
                                        <p className='text-sm leading-[15.99px]'>{article.content}</p>
                                        <a
                                            className='text-sm leading-[15.99px] text-primary'
                                            // href={`/articles/${article.title}`}
                                            href={article.link}
                                            target='_blank'
                                        >
                                            Read Article &gt;
                                        </a>
                                    </div>
                                ))}
                                {!articles.length && (
                                    <div>Couldn&apos;t fetch articles at this time</div>
                                )}
                            </>
                        )}
                        {page !== 'home' && (
                            <>
                                {articles.length > 0 && articles?.map((article) => (
                                    <div
                                        key={article.pubDate}
                                        className='flex-basis-[calc(50%-1.5rem)] max-w-[615px] flex flex-col gap-2 rounded-2xl bg-background p-6'
                                    >
                                        <div className='pl-2 border-l-2 font-normal text-base leading-[18.27px]'>
                                            {formatDate(article.pubDate!)}
                                        </div>
                                        <h3 className='font-bold leading-[18.51px]'>{article.title}</h3>
                                        <p className='text-sm leading-[15.99px]'>{article.content}</p>
                                        <a
                                            className='text-sm leading-[15.99px] text-primary'
                                            // href={`/articles/${article.title}`}
                                            href={article.link}
                                            target='_blank'
                                        >
                                            Read Article &gt;
                                        </a>
                                    </div>
                                ))}
                                {!articles.length && (
                                    <div>Couldn&apos;t fetch articles at this time</div>
                                )}
                            </>
                        )}
                    </div>

                    {page === 'home' && (
                        <div className="flex items-center">
                            <ViewAllButton disabled={!articles.length} to='/articles' />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Articles