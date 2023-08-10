#include <iostream>
using namespace std;

int friendsPairingsArr[100];

int countFriendsPairings(int n) {
    if (friendsPairingsArr[n] != -1) {
        return friendsPairingsArr[n];
    } else if (n > 2) {
        return friendsPairingsArr[n] = countFriendsPairings(n - 1) + (n - 1) * countFriendsPairings(n - 2);
    } else {
        return friendsPairingsArr[n] = n;
    }
}

int main() {
    memset(friendsPairingsArr, -1, sizeof(friendsPairingsArr));
    int pairsNumber = 4;
    cout << "Count of Friends Pairings for < " << pairsNumber << " > numbers is " << countFriendsPairings(4) << endl;
}
