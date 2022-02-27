{
    "cells": [
        {
            "cell_type": "code",
            "execution_count": 30,
            "source": [
                "import pandas as pd\n",
                "import numpy as np\n",
                "locations = pd.read_csv('worldcities.csv')\n",
                "\n",
                "data = {'city':[], 'country':[], 'lat':[], 'long':[], 'count':[], 'articles':[], 'urls':[]}\n",
                "\n",
                "df = pd.DataFrame(data)\n",
                "\n",
                "df[['city']] = locations[['city']]\n",
                "\n",
                "df[['country']] = locations[['country']]\n",
                "\n",
                "df[['lat']] = locations[['lat']]\n",
                "\n",
                "df[['long']] = locations[['lng']]\n",
                "\n",
                "df.drop(labels=0, axis=0)\n",
                "\n",
                "df = df.drop_duplicates(['city'],keep='first')\n",
                "\n",
                "df = df[df.city.str.len() > 3]\n",
                "\n",
                "delete_list = [\"Russi\", \"Rubio\", \"Batman\",\"Florida\", \"Meta\", \"Polk\", \"Star\", \"Victoria\", \"Hamilton\", \"Douglas\", \"Nancy\", \"Jackson\", \"St. Petersburg\", \"York\", \"David\", \"Rugby\", \"Mercedes\", \"University\", \"March\", \"Stone\", \"Street\", \"Media\", \"Most\", \"Jupiter\", \"Poland\"]\n",
                "\n",
                "popular_names = pd.read_csv(\"top_names.csv\")\n",
                "\n",
                "name_list = popular_names['Name'].to_list()\n",
                "\n",
                "j = 0\n",
                "for name in name_list:\n",
                "    index = name.index(';')\n",
                "    name_list[j] = name[:index]\n",
                "    j += 1\n",
                "name_list = list(dict.fromkeys(name_list))\n",
                "# ny_common\n",
                "# popular_names = popular_names.drop_duplicates(['Name'],keep='first')\n",
                "for i in delete_list:\n",
                "    df = df[df.city != i]\n",
                "\n",
                "for name in name_list:\n",
                "    df = df[df.city != name]\n",
                "\n",
                "\n",
                "# df = df[df.city != \"Vladamir\"] # Do we keep vlad?\n",
                "\n",
                "print(df)\n",
                "\n",
                "df.to_csv('filtered_cities.csv')"
            ],
            "outputs": [
                {
                    "output_type": "stream",
                    "name": "stdout",
                    "text": [
                        "              city      country      lat      long  count  articles  urls\n",
                        "1          Jakarta    Indonesia  -6.2146  106.8451    NaN       NaN   NaN\n",
                        "2            Delhi        India  28.6600   77.2300    NaN       NaN   NaN\n",
                        "3           Mumbai        India  18.9667   72.8333    NaN       NaN   NaN\n",
                        "4           Manila  Philippines  14.6000  120.9833    NaN       NaN   NaN\n",
                        "5         Shanghai        China  31.1667  121.4667    NaN       NaN   NaN\n",
                        "...            ...          ...      ...       ...    ...       ...   ...\n",
                        "40996       Tukchi       Russia  57.3670  139.5000    NaN       NaN   NaN\n",
                        "40997        Numto       Russia  63.6667   71.3333    NaN       NaN   NaN\n",
                        "40998         Nord    Greenland  81.7166  -17.8000    NaN       NaN   NaN\n",
                        "40999  Timmiarmiut    Greenland  62.5333  -42.2167    NaN       NaN   NaN\n",
                        "41000      Nordvik       Russia  74.0165  111.5100    NaN       NaN   NaN\n",
                        "\n",
                        "[36917 rows x 7 columns]\n"
                    ]
                }
            ],
            "metadata": {}
        }
    ],
    "metadata": {
        "orig_nbformat": 4,
        "language_info": {
            "name": "python",
            "version": "3.10.2",
            "mimetype": "text/x-python",
            "codemirror_mode": {
                "name": "ipython",
                "version": 3
            },
            "pygments_lexer": "ipython3",
            "nbconvert_exporter": "python",
            "file_extension": ".py"
        },
        "kernelspec": {
            "name": "python3",
            "display_name": "Python 3.10.2 64-bit"
        },
        "interpreter": {
            "hash": "e7370f93d1d0cde622a1f8e1c04877d8463912d04d973331ad4851f04de6915a"
        }
    },
    "nbformat": 4,
    "nbformat_minor": 2
}